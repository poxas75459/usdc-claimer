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
    "61azoSxDvK9fLwCW6YAjrchNuMznCpPecYNUGz6CoBCpj7Eu1ahxznJDTRNJKgcENsdXRzpYeBgVCPk9ktGTABeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSf4CNw3TiEATfg7mFtf1jbbR3ZAyd4MJAnwbJu5KtfGVEyu9qSauRACXAck25fqthiFmcystv7ePPDLsEvQ4NK",
  "key1": "5zaxuuMk9jZTYbiVvivyF3nHAAs3sf6WKNesorh6Ef34RAVeNHYXhbv8GUJCGq1VUnANWZsNbRAqtM7MUz4LfZj9",
  "key2": "2ZAqJjxc5VcBHvnH5aWD5LGLP5DkYtE8DvchxG6yesVD4ySdc8CzkD9hDmpRUytZVocreW56ZA1VsGnZn5dd48Uj",
  "key3": "4wnujSBWm4iS3zHY8zLNKD7725SdNRfZgjKXk25YXienTPPW4xDjNJQtKF4L7QHvqU5N15wY8ggvtZEeGw7nRiwk",
  "key4": "5UsGebpuvVzm9eMPTJcfgL3kg9HtmDH6GeGwkG2zGhtRpprBkmfLhGr1tca7Hpe7eXj3BFBHEK6sCmjjFg91wQmC",
  "key5": "cUBrWvHE3sDq57RYdukUka52LvqQ4bb9XGhBnWKK8CsAFoV6766gbYMrfrDrQSK28LBpBCmqzjk2HMTsVf5hXwZ",
  "key6": "3nV2TLkjm5rA5d2SNGpMNcpFCsiyjP3j7ArNQrV8LY6tj6myQei8wBu6T4BLgay8atPEtKZfUmSW9SVyzKkjrvpx",
  "key7": "2moA2BVYq6c2iBFmAsNi25jfnXi4QgkGXr91mFrL3QAqf7Epme1owq8JPewfjfVumY8xbNwoXVwwr1pecBSa7Tih",
  "key8": "5cVRqRuTLUmWr3h9e33AwK9m8ZLuG3brLckLeAVBQc7sDhR79a6dZnmEBNGZfapgmLJmC4ue9euqetX4kdeodxvi",
  "key9": "2vZJm8AYw7Fx5kP36oamyuQA6GpcmzdiYaNV788iT3wVXG4PQerigPiJ7GEfbQ7BrkxtNB12N7u2Fa911pVRQDEs",
  "key10": "5vqXhQDKCbVgJ8DQQiXghbvGHTCoJUXBW7BdGejJM8jk1fRjJBq33SnVYhQLXdL2Ya75XUQnvNyhXyBvW2KjTLaY",
  "key11": "4qjzW7Mfvj4cFKBjJ6Nejq2jRjf5mzJ4tZNiU59q9dDcwc1z2kdnzdXBxKHaZLEcyZcy9rDeTNMuDXKUPeemJyq3",
  "key12": "3eDFr9WjwchkqKNmC7eCdFvtw1q3Z47iMH5tzP5ceSLrzAuqWSjKdV7fqARPGqQG3xB3QU678VTWJByxDToLm9mF",
  "key13": "5KnEJbpSQYsoBZUMscpgjpv5n4kA1waZ9chbK6mR14SJifP7CP2i496icfivuc1Q1ghsdfgmB7dsyznaeHqsUZV8",
  "key14": "2bg8nPoNzpjLduRb7BZ5uJuiDEMohnKgPJeeupbVuWeoAiTxVS8YDFmgQEekzdv1Nr6GsmPUJSTsdTD5qMhxAY54",
  "key15": "4iSQhNW19Lh9bw3qmSDpVoVFDKKm31TeorTnfW6KfvZrvNhiytYnWRwQ85tAWqYiKH5dhGQt2rsUPNyjKvw9TiEW",
  "key16": "2ApDYnB6PUdHCguCUjLoaH2DE2beQEcapqL7G9NnVoVqUTAWdN17p4Qce2VjwaWhrzwUpGu761S5RsJyjhrN3imS",
  "key17": "DtLC8xoaRUrvMWyA1QwDqPpP8zQpnVWAg92eKdYePNe8hywSUKhVgLgC51TmNZbr9iJ4Q2hFESXPPL9dqN5MNCD",
  "key18": "3zQYeowTtnXCPRALjUDiK6cyHTUGy8xV2Eny4ad345zTbkYTD1ekd9vSEKpvryWsPmpcqikj7vKbhL1JdzA2SXKs",
  "key19": "2M6FWxdo3kz8xmZwvSms8jHqH2M7KcWvNoMHugD9of86ML6SuLKpDxrn7ePP4ihfJKpncCwMYGFetWh2XKBjgfHQ",
  "key20": "5hNd3kKbfGMoofdimkn8PKMdZmKSt86gJSZYVjsyM8Es3zaoNuUB4jGWrrEGFPJzYx3GvDWKBobTLzRzA3QhKEr4",
  "key21": "KuhZucmv92zme9CFADHAayfCZrchT3rXGJZVhS7oqNxsE8dBbuDLZ7XPBSjDaANWbJRt894r25qJGJP2E1VGRuw",
  "key22": "3uzeezYpnv9Wc5tUVbkF7tQBvFiateU6cH74TkaBwvybMbqYhc5wAt9CuqiA35NbNaFu17JCN148spAMvibL3vGe",
  "key23": "tGXLa7CzdFRkp5JdWTQupXm3JEL6BHWhWqRBNRz13aFdfSq2ZyR8yQX13qoo8KZRJHgbVcStyzHvX1EHjcqXygH",
  "key24": "4BDHp9i4SvwtRZSLY7HDgaMdBSy4fJeGYaBbpB5aA91qSY4MPzQycv8hF3Gpc1agKHdpErJjscdH3XgAxqCNYGcL",
  "key25": "2ZFATC3EsqiAXZxHaAemh5zDJqTozF7kKexfAr9iu6QDtJ4cBPUoWUiNHgLThvwfyWN3JgiYTCL4yF3pTCVaAzLE",
  "key26": "4XRmmeZyF7nWrTJshxNfrDnDNgKu7F3bLs7bcQhdfdKCezc2zTLGuEwBJDtwAxa5hySiPbBveR9sdt2jvL41gXo",
  "key27": "5RA1cveiQV4T7u7QkuE3Zpk77AW31814D99qQqp1qztY6X1ayrfcTZLknKYMgEosFSTjSwueNHWhtX5fCie5bQj4",
  "key28": "4RhW1a6nG53uyWjZqEnosJ3QoZF5cPNfGZiNpXPeX9JabYrwqKryg68wvmdtANzgLe9GgwhNFbVaCz5bfhkBPZiV",
  "key29": "4dUEFU74ncBTFASg31iAGBCw9sb4Fj25BhubmwyS3YWZtYwj4Tu7AyKbUpLeM8W7KcJszSx9CXYXc5okzYN5G3n4",
  "key30": "4v34d4jgYE2ZPi6UkZorYkp3iNjfsExGto6G67EMqjjf7BDsYGsnw4d7wxYCadigAbck31UXs9gR8DhuiZKBgZxS",
  "key31": "66811Hn6P9tQXp8MHUrpZXJkSrvyAerYCvVwZvs13ds3nRndJCaw8J2hnccBsEdS6VKM1RAKtRhoQmDpsnUo5itp",
  "key32": "Em82BJJ5XAU5DNBgxdwWaJQwzKmFcjJqP6inJ6DZdairYwj8Wsxy8fMty5hjLitTjbV2mtDS2iYWDRzMavFNnGd",
  "key33": "2mmfCaf2aXMRp4Mxi7WXg3Lprx2zCcT9Z28xNNERNNXzzpGUvP5hDx1e5B3H1wXgYA6vWZsGf4jSVXaTStVKMDLq",
  "key34": "65uYsFfXdjUddP3m3gj5e8dEHbSLWHDA8VbVCb4haYP619e6GT4oLukE7LveSaU36PdmVhRRLczk7oiakUSKi47K",
  "key35": "NFbTw9mj6HPKUNN72ctK272Ar3mkQUh3eFQV4YvEGnDR9pG6mUVcPojbWbawEBUKmoxJvDRPBk7tki7HxEcz24Q",
  "key36": "3UkK3LNELZBBiJdr5yjyhcM4KFCMeNKsSuuZunrvfrbAgLWxmZMZz8uFV9C11CKmeuad6VZCAzzJNZeDNLEKbTAi",
  "key37": "3wi7pPCBSW3Kv7bZE5E7TLdE2a5ZTuzEFx2uB3mp9b5vuHo9nnt3yi1k3wD1rWrVy3VzBg8PS3wu6dNrcyyjYWaq",
  "key38": "5189N4GwZbmpgbSy14AD9bjX81UFVxhutyvnhFd1H7P1axfQhaEFmQV4DN5GdPv37bDHkaPuhnRHdDjY4FtbcefP",
  "key39": "5ZGu1PzdpQQi1XNQvUaVTATfsYqnKzrqnTxs7Swgg5wZrpZR53LNUyrri2orNUqbf4eYziAANiLgBmqfr3m5Qpft",
  "key40": "5jKjEURK3ZLtvehRT4Loyn2TF4Nvuy2g3WTNA6HSyFJU1ayYfnYNHWJ1oUQ1HokjtpYP2a1guLLUUnVrJw8sc3Jk",
  "key41": "GXMfCnCdJcZ75LL5zJoLMDPL9y7UBDFvobroNEBaajv2CPfdZ78g7PPL7LA6zqKuQBEGaN7ZQrH43ZVWdfovb55",
  "key42": "3UPywMdruC7sQVRPBSDJ469VcwET6V4L1qc3Xkf2ypB3jxfopZzYdKBie8WjpVPLePSGJmneJ7xHMBQjn68SsbzM",
  "key43": "28sa24dFaBMsf3jF4F6cSg9mUAF26VbnYABZjp73eKXNPTd72pDTLDTAtPTJC6y6TsQwKbnxtaswaXXze712E1kj",
  "key44": "2L6D3iYUH6NgzRCrFkTiQynwSMbxueSHxwiBeLidBbGzigjvnx2XFPNnDURWLYhtS6UhedUvugkPzwMzkQ5ebkwd",
  "key45": "42bJnzZoYcTfuPEKZZ4NLwMyoVnh8NmyHomgsZFF6VP7nP42LyECzWvPX9A4sTvV1wreiCY7Qsd4isbbazXFqdLL",
  "key46": "5E5HREghuExD4doZWYHxfK2QUb2XamXFzn5oUzvddq2RGmDbt9tF2sdJ5oopZcYibZaRk2yH3QWx7iPWKFfLjDAx",
  "key47": "5aqsJXw85P5vNDKMbU46X4i2QG7zKWJSK4MzhmeHfkHPTiQjYN3pvJQ7zzwKaT5WhU7dqq89ywiMa2KsMJNLuDeH"
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
