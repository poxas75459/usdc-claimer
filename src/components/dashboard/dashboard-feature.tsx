/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5HptyPGAZC3eh2hYHkpt6y2M2V259YFyHGDAxyWW1Y1WQDEk1gsUDYdv88a41UVTHGgjnQR9TGyaDcqxr4KAp1qW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9DWxXpsxzzvHaUqBhUgrtAbQrfoFXu23J3Vzmz1WdhDM7BTgTCTkxEhcWk4d8hMvrr48jHXUujBaHTW6eW9PDT",
  "key1": "4vVFUdj2oQq7xCHXBYxtKqYgu1YR18PseE9GTsejSmeqaYgG24pByDa648FxxcQYcvDQBKQjPqZR4MoM5hMJPe2r",
  "key2": "3wQ15Q8LJfbTyvUX4QmHfpNAjMid47EYSkqHuMdCsFfgikbjF8UjNYruD4sz8Uv9USBLvofqNbRi5ESnBSXBNgRx",
  "key3": "iD374tr5hReG1x9GBxLnkSdTBYRvEBghiTpX9XHjGBE7E8rx1S5y52kmCro8dcuEnmaLgsH3WobTaaBJJ7bHgZU",
  "key4": "4cSVJQfJztJ7Z3K3cQqbjwx1wr2oCnoSzRcCDQKzPTQtF2ueDnSvzupVo8TwLUNK5vSs7PPDiBc7aiMrjS28r6ed",
  "key5": "5TZUk2kTUEG2EXazGQSZZrmxgYdnJ17kjJei9k99rHPihcCDgbEMuhcurrDLHU8jfqjGGtNk9dSzPrWs5mwzWkWJ",
  "key6": "4f3Xm2Bwp8Bj4q9FpTY9FNW7aQ1cKCgrKZKfodWv5rmQttdrLgjuTXXr1BaL42Pars5PZdthqiofjqzvNgKWSdrg",
  "key7": "4K3ajHN98DuWuseDUi4cJX2fP1LMYeoa2z5cxrKx42EeCD5rGTxeAKAfpHNKGHYEpnAgjkssmDqKRXKadhNgikdY",
  "key8": "28vmuGKgo6XqyViY49TWpYNE8psiWnaxx6231nusJuoMsdYa1k4GV57F99P3ja4a9KktaxJ9CBuXVnzsETDoCGwq",
  "key9": "5j8wAvRqCiuV7U5bQjkisLSQ1xXVTW2D1kkk9N3g3tbSU3A15gwkwe8Ag1xrEUHRtzphJ1bzbBwoC4aPgBg7CSJo",
  "key10": "26tUaaGkx9QvaMLWfiVoBm3CXwDYn2CsTH1YSo8ZduWRiuXruSSiSeRVoYynq4Aam6Qf1XbwJmCKUR85HjQC6bAm",
  "key11": "5bSxvrXq6HKZqFAWBGdgU8R5P5Cj14hZYwv4v3n2L8RynFiFucWeRQhQMj4xtUbirASexwt2PAKzMbRec7c41XUt",
  "key12": "3gQqebKwoHJhWmgUU6yYQctJywSUQjubmdmEAmrnukQgqy9rFbCUj3Wt57d6gDy2JyoQsZyzLXbSAgqBUr9Pb1V9",
  "key13": "3RpQG8rZjFJkpXm9HuJvJMLyGzMeLAj5aKNBDpwugD9uTfDJc3b5k4sMp5Ljz5oFVnoMEPMZBQ3qrZE29jqYfajf",
  "key14": "B2UtYDK67u1qznC7oAyZL9NGCrCjh7dRdAET1TRWLZ16qN43eFdVoHvT4PqPVEh5TLYA2HMZFumW8g8TZuo9MFw",
  "key15": "akFmdQ5yFZXr9Lq2WSdFz8GCgoaUHqjzLjTgodmLfL47F85ku4WWKnPWcJQfJqAMGMccmNDW92oBHquT9K9XAtt",
  "key16": "3qoP9xxkmTH8LirZBGFTBM9fj4MBsXcUEsWqAYk56inxic8fVn2ThHSwkEur7nhkVZ5WPETKKbAqVrn6hrch5H5f",
  "key17": "4bwryaUSjECE4Ptk3PkT1etd43h6QdoMFhRjmNUaZj1TwsuFdpo6os32tbqnqWo3MCoy9V3tDPzu68Xpye4dCD1V",
  "key18": "2RPpgPmLhGtmfsukNx6x6oCdCezykdWn64CxqLAiUvdpjEq34PzLe8aFYNzUw2kkivK9baciYQ7Fd5hMmpbrE5mj",
  "key19": "2Qv393gH7a3VDcp3jbWCHR3Mbj6tnQgGSsCcnWmACpsgzap2nddXyS2jmUSk1Yen5qvprj3drdjjgXZ1fFL5YkMu",
  "key20": "2HQirfo7cuvUYo1rhLW1sp2MQEXwzLgEYQC3fDnFHBdLYQTUMXw5QVMmSDeksVRkuiGfjpm2PqsyD7a2xbXbHMN4",
  "key21": "2fdPGCGbyeYYsxinpmAKzbWsmvoEpYhk6SqDuYQVnLC1ZhH7wo7xomfzNnDhJU9TcMXwbrSDSqhLV2koXwSivz38",
  "key22": "4tckU6qfNsoKW5fJ4DFpENzZeYn6BHebQ1c6Fgs8Pq4yV95RN9uAAB1wfpi4MZZXSHtHePAXBcgKLXnazSmURZ3Y",
  "key23": "5jHMEtRnfjjNbZtxN8ELJwFoccY5PT81Bo663opya1bJjtECiuTAB9wjpVKucW89q5vc6gaL5BykHuafiHTsYS1",
  "key24": "5Ty9wsf4sfQDi4V7dHadxtdbNKoPqAiw17FbekyoqAR3QnpnBTkhuQ3e1XbohMC9fdA5DmJKcTYGmku5RZHbT31a",
  "key25": "4YGTg7gSNnNbieNu5KujPRkvSr1wMfuxCYsUr7erLxepq7rULMcuPRtR3YXcrPkvQat8wDMRmJ2YXFxJNbCABf4T",
  "key26": "5ZXcqtYXsXowK3f6gBiFMpfnNs2yQdsaVjAxv5hK2gu5LYTQga33pg6XKyCwdBSfBnyCW86iBm5YDvChSgC4mUmK",
  "key27": "uiyd7QdGHr57q5Yq6rvVWafZomKdFHgcqf5U6yKDzmx1tNp7hiZSSZNU7wbnUs6TVNS57b8zTaasD21WkX6f35S",
  "key28": "2hne9Vkch2PqRPAWSBBszY431TMWyZPHvajjngui26h6iDQT8ss5EJUchNaoqAUW5FG4y1ek6CzJnmmMqZU7x4k3",
  "key29": "5KHFBHkNptHDLArcArrZVhe7tKxGfbGPLPZyNgpWRGhnhozdNQ7UojrS29HEbAwYmkLK8VKNsK2ezVVja7nuihvj",
  "key30": "41MFwPaRG97JxPXAuvXscEkhgBk6quYUFpPfTWbN1ZR6B8QrRUe6R3gPLZZAsUDGEmxx7p7R2nYKNRsUjeGPeNhz",
  "key31": "5XVX7JyZkXyT7PTPrMgsBaoS1UT56KesjomM1GnCewNvueWReaHxW4E22j97SmPCuKga489PiA5BEXr3DZrwcfNK",
  "key32": "zgUDz6YNmoZywRLtBYuoDJ64DzDwBjcDxQRNVTVo2H6Q7N7mYqAvXHQQ6QLc2bYyuy9UBxkCUWxmHCvYAqZ8Gow",
  "key33": "5woo6EnSwfGcsjzc3fsM1DjKvCR4hdzitNbJu4DX8tcJmYWaFM2kfuB7qCyt6kUq4SRfG9feABwC6Qcb6KUYSQKH",
  "key34": "3cQTehZd1yRanPcZQepFN5opVrHdaxDPpV3P3yBddrygdFTkrZKBRevGgjmxtVzTNhbqtrsy3VZyTG22EHDu9mGz",
  "key35": "3feSF6rgr9HZ81wbV8PZ2YW9FND8298ATenGSWKAFLnCQ84WjryEoX3Hv5vTKWxTaKVNvEm5mwVxa4AA3HCQ4VYF",
  "key36": "3dSfTGsBa46cdTJks3UnRZvY73QpKUehZcikPJjQ1CbFytt8HTQgYqdvPfLNwLU2SiEnEGpcY2sedEDAi9EpUdmV",
  "key37": "3kMSuM73kk6Hjb4RBZSxchHBaPfycrztfFUVA9NpDk4H91at3AbQKJFpDCqrnYFMCHMcbLh3DEvu25vgv963Xt3T",
  "key38": "61nc5GNGZAQKS3tDXZsrXi2WxqGrQXHpwZBFB4SEBpVeoKRATfdpC6tH2F7BuyyuhVzoV5jJYHJEx9BJodD3KMJS",
  "key39": "47JhAHrPXNkhbhFXaQNg8MWLzExngYng7gNAw4pz2ZNyQc25jDAtSXVCNCP6bMoCzhLYE3uEs658LjRFQMipv4Wi",
  "key40": "4EQdsn5vP5xgLLBtuSwnoZzf99Sfa1yWnEApgVJmfhbDy2tUQBmvzrGe4GsHMSwk1Hm3bBwzLZman6fwY4G4KuLy",
  "key41": "2Q36vvfyFPdjx3Ls666xkHEHjg7CiNghH6vDAbgwbiZnUMGMLcjj2NHYD3U2KTkVypVPTcDMHeprZPk3uDvm4haa",
  "key42": "3sdnGQ9CK8xrdDenKigTxWRLCJEiYEav8jZDnxCyWkmhFk6QfxNt5ypn3inU1HcsRtoBmifFXzeSe1dMx4r7Gnu5",
  "key43": "2s8qzuGC7mjaCUSJhSKBkkEx9abGicsMHMHnExdBhvsRJDsn7M7Juvhmke7Gps7kPWQnRmf3whKVrrrePdnEoTAt"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
