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
    "y9buzLrA6h1zLcuSsPUBXqDQxfQ2gRqyxe7pRhgWcFWvFi3774FgEqjbhnrfeiLiH3U78bMvXhrf2QX5izbjxos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2ZkKXwNp9mCLmxxRQfwPXGv358WZqPDxtqo66zPiziAsQ4f7oSXXHwPQksxZ6NrGcyTurnXsU9B8MH8SmWXHKL",
  "key1": "m6dgpkvHosTo1yTv2zAntaboXwqB6dLkoRZQSNz9xox9r2x5Qt76Aubbc7BeZGGzMpPahpWBPm8WyzSsuWAeGQq",
  "key2": "4b5774YraffVz9UuKgg1XWa95f1TrLyfCHGNFxqMRMiMjFS2v1qLsTUo3imRXFJKHGVRMqXZ6bgw9YZFNVxXGUs2",
  "key3": "Cqj4YkGFmQMwXmANDbRXirVgen2BKegxt9hKAvWXQRFpJSJb2xd8uGFESM6FdSUuDj7JbA8y5icHxZ4KQNKBLNy",
  "key4": "fa3roTxNAgD3G1pBe9jcaEdyMGYmHNrgSmsphj7nRLLmYJbyYkdqQsWyCrmcMKcRJZLn2J2D8zKwcPoeQq48nAZ",
  "key5": "27LX5zNbWUn2yAzHkQsTt78UgPVWU9smWETLE7HBegczcquF8eM3ZpyhnZ2kknbMPLrazA9Ho59HknfVNRXsnMXU",
  "key6": "34enNswguHrfewHmeutKeBEdwaUDLaApi9bFDxWN8M2eY3dJPjbUu5SB3vk2igRktEM2P4miH9jLrGeL1KWk6REi",
  "key7": "2xHSCHB9mjoy15hMTgtvyeNNnRMtSSWoETCnWJpgsVKnNmo7hHmyERRfytX2JZQBB9caaw7gQtLuTUavJs1V6L8T",
  "key8": "2ibAwnvRZgzY7AkCtjLDxEoPVKLEXSxTZbDAyMx2yWUYh4dcXSZDCctDva7Lxm2Gqir1hFUR6keR2odZFxGL3PbQ",
  "key9": "29rbZDkq5pYhQtf6S8Qcftx7p1UjRQZYa8AFZyVs2z2pwscU7ZxAuF1QRs2pQCkzhpCbgfKtw8bW7mngk7AYCeXQ",
  "key10": "3iBD5W8cCXWULPRWDMWkgmdLGif2ERGGwVqckzB5RnQg3QmSUyTzbLGE1mFsft5Y74mXKCUmJJBSb5LQrvKMNzwh",
  "key11": "5zusfVKuarxvU7JashnwvM8wDNAc699Kj2t1Pq8CRiaQippmbRwYpjct65TkDQFjuXmL2f7FhmFnbxXsg69qUaR5",
  "key12": "4quDHRjo1RaLSVA7W5oYnrxzQSqQgZpmm5MCNb4C1ZpE8WzzY7bmaHUwPjSZcgF8TtjRKAdPWn577bagZPQpekKP",
  "key13": "4dyBziPELoxHfSspuqo13zTdMoM6fmGn88DQuuyFnQyYKsLBhS48zHCD1MUej3kKnhJLehAVpNfr6KVCF2rWWcwM",
  "key14": "4gn6RXsMGFx321gw2oULAwnD1LzEsnSt78yEksSPYHam8gUZ38PciJGW78Maxn6k4b1m5mfsTUbJJY2KfJrXCo9S",
  "key15": "5M7yAhq5YEabvnnbTtYFcgBfBivdfsNTiCrqJuw4ij72KHx4QRQ5YgsnWejGYMkiZJYeZi9Y1eTwLoe8XKQCdrtN",
  "key16": "5vUM37vgfogdWYajMgTeKjiJYKqyM2veXeHrMURGvtxDNUANQdg99W9tUgkoAAgHgy3Tgh1MfPpvQdE2D61fPTT8",
  "key17": "3ARJ1Hfkrvcbzj5QWiGtPDo7LXNXPyu2YuwzsCTwhG8fRJKADY7tTkxw1LfJxD3FoQhRhW5eAZTFoM2cTXg8UDhd",
  "key18": "3UzMFcUVQ3T5SY1TvGKgBVyXfaiCAcMjZ8DxMDkpedNiTdHsQQUK3LdiXujPRFY5Y9ZvxmNSsqw2MRwzNsUm3Doh",
  "key19": "e43yjxVjEbmx8uP7AJ5ZofSsCu4VuteTCubyWE12NRAMq1tRdtVsREW2zGYGg4125CHDC1gbNto8vKDAkzdmX9y",
  "key20": "4AcWs73Rd22P5TYWLAqUopWsvyL3UpShpCe2on9ZSmdMNU7EnDKYPadWcuccF2utVZSKACEAkqqvocUk8NBKUUMd",
  "key21": "4AH81Q5RZgzEjTzwXW7EPjdiTuugNcdq5jksNVJJzTKd81XiwwGtnJ4o1afHbXfqRCUF93oxy5qdUoq885MSR4uN",
  "key22": "4RT1AjLf5nijHUiVn6BfmzYBjb7VKmNL3TgHwnnjTaNFNjmLxT3oZNQwiSGLWbo76qrmoBjyxvmmE65UitLGRHA8",
  "key23": "4fUQiDvKixvzzK9pxajLwaE6EfoZLDXnGT2ihXDnMwBAH9ZWswaUf99mUqtsDkGaAKsjZSabTwb13DxiBcubkuFe",
  "key24": "2HQ3BbNSq4fpQPp2ZYWR3yaneqkNbe2sS221q9bTMFw25wERMnqm6r6m9Eou2ttzqmYuZCh4mCiHu7RHMzGXihVZ",
  "key25": "36BE7RCGmzx2aMs7A3chCDtZQWf66EveciB3i12YaT3SQsJgz1JVm7xQyDnTReyuM4tNYWmUzNnRSw8jNBZozr55",
  "key26": "4KQ83RND4PJgsXd9xXAecithNJR5jRXg21pPhcf1ZKmGf1FmnYiMwk3fzQK8gff93j9Gi2PxQfLs4d6DWPdXVFLK",
  "key27": "3Fiu8F4fVEzgV6p6tnxBp2gUUfpQLtUxVYSQoNWW4AojzVYgmQCpc89AhdLPMjb2WA9hb2eSXzf54PniRNMKKdeC",
  "key28": "3FLe3hFon5cHgeGAcrFCCKFko4TR4WfW6TnPiU4Tseq4CXaGM3ZQZga1T9XZuJgK2s8fkSUXVEHtkhDrFBaqn7vC",
  "key29": "2Ls7t4vYATu6wyaoHNapwUSWzfwDk3oFBw7nEWt7rjRyMciYapsbdUeBanEBU3SKiHNrNGjNep1DtkUe9ijUH58B",
  "key30": "no6y5L73crQWzYiU6n99meQ1NkCZWCY5yy6Jm3jitHN4sg78BEh24RsiBM8NnyqTxTx7CrbLgMNZUx974v47p7e",
  "key31": "4Lw8eqT7KLvJ61PzqfNtxufUg5pBVgmGhMxSJpPJ3JqFm9PCNJWmW7jp5get9NziHFRC6uB4wqVhCg2RrwkCLzdf",
  "key32": "29Vhzk7oYMmx4NyYKRceiUkh7Ej2wjgH2wTsfXDCUYsKR4o1PJ8XAUbi1Ao4VFE3Bg5h4kD8VJ7uBFMx8sEm7ger",
  "key33": "3mRDfX4XYa2YDr4JNPr6zwiYwxBgSwCNhuwKRZ2PeWixa7iLLJuaAzTMdVKj2oBbGdEVrJ7QpH3Z4S9RTk9PE7CB",
  "key34": "41egVLfjXbJ7oQjgKyLZxuGFnvsfcAEXysH2854F4BPrq18FHHTQoZz9M6iphPfJajRheHynERTUsHpQrK7wAZ86",
  "key35": "3fGj3txsDaotLVtpa5YzWnjKZEgTWxoJZoMQFJmxgpRhVhhK3VkhBTosmvteA6sNqu5fQCQ5i4qBbCbhmBEro8NU",
  "key36": "RzoBv9TZubmNrcgAsYuE7wH7Z3hS2LC9yDyGQzX8AkeByTgA6LuKKQ6F39yHV94CYzvwdHjif8m7vPRmztVRmmq",
  "key37": "3KJjmSTCFDo1bx2eoZvQMS3E8bJAGSsxhDGz3iaYcyJLkSXw7hAqwFWrKyjYPNuDoa41Kghmdos5mUNivqQYdMar",
  "key38": "3kZRS34TdLsVd2bJcwTzppoLojnFJZUiDLahDyfqzyZ3tWM9uanTd1QCsaBcajRk7sA5BRFzGVYk8w6dV2KNbWN1",
  "key39": "5745jaef51deKAUykPe2WsrVLG8U31mDrFL3z2vcqXQeyfrT5pNTLypHQxidiTC2BVvF9KvjVB3yqTgAwzwa6XNx",
  "key40": "PdFhfd6Mv67cdXzQKe1Ti73Qg267uYVrTruEonBe7m1V7T5TXVoNXk5URyAqZ7gHCkGKET8a9NWxZSLaqueytnq"
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
