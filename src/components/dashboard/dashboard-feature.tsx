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
    "4WLNSC2McrYeEpvGtTkW6xn9N1zE8zTcZ6ZdRa7X8g6wn4E6Dsg7tpCK7sC7QLxmYCQA1eZWzkFj7qtU75bfHm6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BaYSAeftY3AuiGWAzgFTAzLVoutKAT3fyAZtxumMFAdxc2xAkHVWjqqMDLFbzcmUV1Jxk9Us7HE5ntYweLfSfDS",
  "key1": "2MVMwibczkp4FRFzqP67NhnbiKWUqYXNDBzdGfbzHEr9sbo16KAAhV4h8dj8QRa5x21B2hFYYiJ52iiuiGvYHN5C",
  "key2": "5BeYJiQqwvXAR1LBX5FhfKdW7H6apBFrskDPdRSYv9sWMg3gHdraCoVu32MSU7xxA3RuHjL7tWANpF9ZgS8AJHWr",
  "key3": "4YnyiuqqTxy5nfLvrT2nsK6FbYd8LPyMAndGRnEmJAaw3FgrJ8fcj34AQVxKggXngbGJQcBccJVUkZdjUVmBX16u",
  "key4": "521EU4YwBHHp5e68JiSaZAWXhNgvfLxCuTPgLHzQi9oWLJaGVM9Xtd27fHPeeRd7nVkX2ybqfAAMNBJW588QthFD",
  "key5": "5pxozUFeSdzX2TFudyYfrdPwJ8gT3NX1WQrzCEa5FbRYHQDfNhjcAp3eDf2FDaJSkyqny2X5QTWXiNgjukT5Cpuf",
  "key6": "5pAgtSYn7EK8Lzr8MxRJrw4gHtGVVvtymDR8ig9Ki8SpbmeX4rrhp9CC27Gc8maFHXB6Q4VqiKKDxtqWLiJ9rPsb",
  "key7": "2SxLDxqfXTXeMux8RneferqXGAmBP9ji3ZvNLLzUACiAmJBVQ9nF1G8UimAni7BPtWYt861W4igJXaWsRLonbuNx",
  "key8": "dY1hyoYhVorJpAJWHNJMXfpjn7kfFqHEerGm3uFvMmB5mZg8oC65UjjhAF9VaXFpK3VEUrfQZyQKXCK5qSScHYm",
  "key9": "i4mRL1o4XuTnJqRes5EG8pYxxgsJXF2nfSxjp1xCjdWSaqUJgqRAoph8pNTab5Vr4wVCThZMEV2eJERfSEqQGVj",
  "key10": "3SZ7FnWX8pnhB4GFma7BvwePaKq8JEjH4HHGsEiWCYKaJztQV82RA6LJgTLZogB6ywa8pvxrPhZprWP94tyBHFGE",
  "key11": "58LWtVSewVHASfZUUqws8WL4xM2Ps7BrrkPgsWt4P6JZq1jsbTkB5yAMKHWcyN4H9iynaVLVEEays2W44ZXCrkSR",
  "key12": "3sqxzrVRFkFVN5HsPF8gXpb4RN7oR66YUyfPomM4VWVya4VSpmacpptSSk2bp5cq6nYa2cx9up9tu6WQsDdfbz7n",
  "key13": "4CTQieorTfXZ9FbTYBcYqfKxrKdmWp8oSjXcmWR5aMwyyjE6kH3mwbEUnSc1ECUE2T1HstiVmZhgURRoswZjfZno",
  "key14": "2sF2V3m38Qu82nDG2ppVxr7i3p2PAau76aLLyF2MLcuhXxjB34kAXTrmrPLqaXbiocoV8sXaEboCAQcEpVuztUm5",
  "key15": "5W92B2dA7kvgREHE63j4xtWcuHugYFCatSCuvEed6EQqz2R2x98vsYURV168tSDrMrWHtFWbPG5RAipgbHiyNSi4",
  "key16": "52cHwUbUgjDVrtsD5ku1jPp99CCQAJnCcMqcKkDJyVzMMtE81gw4nzNMzuHUsh7bqTXpCJyFdTggKb4MMHbWHq85",
  "key17": "58kr437UCroYXYAgNmaFzcszu5tWxoao1eSZR9HewEhfHpPe8Gqix3vU5Xga8fr4LoRWoVsBZAHZoVXempyw1tZL",
  "key18": "2cWs8AXcSs8qP38cpRdgLKPXBamu7kKrENdnZ4RZ7EGGUczrUqDkopPjcftcffbvbxa7Ptw96C9pSkidshYXU8Sh",
  "key19": "21RH6PZvco8QfEuucr5kEXfG9xDv47YkK3ucHXyVZeYXfxPALEmNmy5hexJAcxBwERdCoYohKrJ9pyaLZjz38rim",
  "key20": "F7RyaeeNDYcwBbdgH35x2G952DJbaHpVNht8P4LLb1Ef5Ju1RyKi7xBRa52aVN6hpCnPH8cmpydaoVu8yLqT111",
  "key21": "2ZagiWbeoizx6WwWjqZiUREGW47dT5xLRWRLkkn7o8sX9jrWoRCnYjvLXLUw6zQLwCb3m8o8UxPHJ5qcFtd77z6M",
  "key22": "pNxQJGhbYbq9oJ74HPnSp5renPo4uxXCS4y3VRvT45DPeBcbwGYH3Deh1dZgVSntMLc5yeFGe6Cxvt1gzJpHXRn",
  "key23": "3nj9njCWUyBT4q5DZrKnC6ARycVwtPtLhLxYu7ccSxaFupKKDyj4PwFatUQ137kSH4aU1gh62kSuq8JFFpdxmCDv",
  "key24": "4njohsY5paCvxYRp2hqqc96R4HmCu8B7HHbZhL2gd9z2hkfuNjiTNMYk2RxjUHxKeKJogaxUop9aEVdNkmRQ3HaV",
  "key25": "5KtqLb9vyFJKkH85ff9opbQw1EtS3mvQBdkYwaxe61gedYeHGCVtSZMX7kVRZGn8PSR9NvsuVZY6rAmSYpM6QKZT",
  "key26": "52dJCEwMUrZHKLoPSyntyAeYSNET51RHZwWQjFEJCPrzprJWvrmLHxcpDBdbaKNYZDQkzzyzjZt6FZQhhumnKno5",
  "key27": "24hR2bsj7EMATfsetUGxvJe6seZbd6UM5gKTCv7qS4M73Tt4YgN2SqV5xXwjaF2QCrUPZPDsURN96LSSXNdjKVJb",
  "key28": "2xv7LVD5JKgkP1veoZK7YUAxyXdMSZx4y11PggdjjNGXqzniyLuKwhSTFfxQxrmtPj3jUsgvRmbsKhuDvbHSLLDG",
  "key29": "2NNm3EfhkJspgrJt7n43sK8cDonVtfdNc1gW8RcpxBcjU2iMaAEzSrnsEb15jdDhZu8RoQPg8hcgrS1giDbwsMQ8",
  "key30": "39LedmUCVwkSLVXY3MqbZWqC3XDCkDnmUUZLEwviQoeeKNhhHcmTGfSZpLGZMqqFxxhNsZkRoejAn9LLrx6ZTfzE",
  "key31": "5sHtCWdH3y6SmLddXJVfnvE98HARruQtC4uk1AwYEEpNd1Ma169dLEhNTQsE7R18pXpjtCXyvMB5aguSLKyGvCtN",
  "key32": "4hRLqxui6TEqC5uQCwNfPzkXfmi4AFkv15STwupE2Yomi9MoKn7ZmXk3y7WbcpHtYNS9iUt8oUQBYcCDW16pgjHQ",
  "key33": "Vf9PTL1T2SAjr2ALzjT4VA71TXYtTzfMB5nxhU8GXg8rSPmR4i4c647doRTXuaQLobYjAvFDviGrbnnt8CKRdtj",
  "key34": "3nqYGrz2VsTq6KLF3cz5iFKu1bLjzAcmvfBb8yATsJZvK5yFfmahapK7fCr667qf5h63rfYza2WxAVFB2ou25m9N",
  "key35": "3a2Wkzd4hbPFTgjwcecGo845t8wJ6KwxcXqRpofZTMAQvhxMSh4a9MopsvxNNCTsBooUujHVWvX39tU2VFgjBRnB",
  "key36": "4xiST4W24c2MHifC89UL78kZBWqtvGL7vRx2AwmjU19PZn47LM9iBLAoGQEs4Y2FgiQcd8ehV3Juecob2A8agFEv"
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
