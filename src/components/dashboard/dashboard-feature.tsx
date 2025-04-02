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
    "5L8nLMZyJc1nuM4fQWLtJ19EPt7sqpEfyVpmp8yx2K3k5Xv3GrCXFTkeseJjsevbPBwzPfmAioV8hSKV7P95mNQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czAGyeJfTAUySwAEaCBrj2uv4aGZq5f4LGS5GjDtx2UZa7ZRNp8ERWqt4nPPsVVHZepNQtBS2FeDH3dqRZ9n69U",
  "key1": "3SU5mYPpuh2z3kn69rWMcm1sgwPDwac187mGUFeAFPgGFdTVKNq9rkAK9xUzkMZ4qxoUpqyD9bhpWozY2JnJvpSQ",
  "key2": "5wf6oNoA8nXN5KfYnNkxSokND6qMM1SXc2DZQbXwNEGnARBg3zRHnv1rAdgsXmFPKLS7qtkTiQajMX7h2axJAXrk",
  "key3": "2Vgeos1qYzLauaEwMUaUywatdp6RbyjVzsqNCB4zwFa9ujJPDriu4SwY2NWZ1QXfmfTmGsx1MJSxebegrQkH19jR",
  "key4": "M9rbDreGFr3nyFVVA3CV64HCHnX1sLBdScomyRZs4B9GETf44pTWqKfkfJDLE2ar18ug28Kwjoc98ZG3GaZvK3g",
  "key5": "2C8gBq7RqUufXTzoYGGCAggcX6QPDhCP1qrqjWnYPewpN2p6wKPKnpx5sAzC8GCBrrXxS2cSihSLzKMD3ePS1VS9",
  "key6": "2DKtBmwAyycb7zgiJizGZfaCf4YUjmf9kVJjZK3rcFUogF1aKnTSdR1ThuvyQbGxTNzP5Dzhoi2iqF1MhTtb1Kww",
  "key7": "58ZtXr6gHgfdjcFpqbmvd6VZxxSvnfK9MwjsqTaWRzxv9k77PALiX6AXGdL9tDzzG8RqpBkcMou1LD6Thbgqud4c",
  "key8": "5mW1t7KEKDnvozu5spmDyWnVEBkrs7TCPxbcwP551Le19gm4aC7S2PJRCnDNo7NrNgBfG4ouJf7vyYUJQtMhH8Aq",
  "key9": "2KoR6WXpokbHH1dtoWzjPNM7GyniL75kZ7PHPqERBE5oY91eqLwUJ525HvhHk8QDiy143VS4MYtefYtmmuuFE5Qs",
  "key10": "2e6MzvNoyPHoaGYdF4SCadUSFmx1tbmayuU2NHWAoy2c8Ju1tDVPTWHQ4YnXQHpL5tnSssHwDW1KfXsQ7ZuSEcw9",
  "key11": "5svkWenkA6ooUq87qfybYPNu7FLiWpfaqrGkUR6Ytky9nJR8uzX5ourK8oHrCnowH8XDVhReySXNkkdM1YsCATqG",
  "key12": "4ftjVLw1aGQyh5fmtNy73FpeucYVMUMtUtAnEHSr6YdR4Tv4jgbK6biTtbWRS3Bomd8qKRKeDPq7EhqJWZ8LJ2d9",
  "key13": "9YLqaDRwctBehwDLWt3PCupvsoDHkAWxkQX1RyMNtczfEJQ34bg6iBYJpashSV3NqBeiKCXubtKooS9RjPNRkEo",
  "key14": "5dtKfr68sNrkEP1RfLk5KyrmP24ETD49QzGNFy4b3hWtEPWsvzzwCHU5p7ZRqi6KUt5VYXtLAPiYPoTNaUKoccsv",
  "key15": "GhueCDDNTNbU7NPve6Uc7wgyWezSGkkGSe8qJt5LsRKhADSc8N6AL4x2vv3PQXbZ8DqWhz8zWWY3vAp3eRyAkFx",
  "key16": "R19JJRgz1DAFmczVNHkboqkYuRoEsV69DNHz95YYSbBPwTwkB91x2puuwvmNxJKGcJJ4C1Nb2BFRohCTRX19uQH",
  "key17": "5MsZLUzuzYKda7F7MLPGwQor4VFofyyZ6y36rZYH4C1qFazythiWMnrXRwzqFzxx2B2ciu26fELyc1AiwsHMgUac",
  "key18": "4pQUUC88J1MMVyQPHozcSq8DkyZ4cypQYLSqphwxhETYjFrkd5pG6sXE7KAhkXuWsD1uaFwLrLCqVRBHJt7wVgLa",
  "key19": "2vgsnzAhjtUFqJQWLb3BiHhXsDbL7pswqaURKgBPEQB71kPg8e1zBtvTMLoxEEc4jKuhaR94tNb1hRXbfAjCRStd",
  "key20": "3S2RT4nJAN82PKqFBqz4qq4go8P3yrCS4Gct68YwbiDV4jzXA1pLL86Td1zd49StobvMEwMyBzrruVAiWkgPXkfJ",
  "key21": "353kJd9HREwbKH2WtDjHXg5JkMzgbjZgmoRyv3h7v6NDr6s6rLYWGaTWzoE9fbzRopuvp8xDyaKzC9xf3RoUKTXe",
  "key22": "2DXauybAwMwvKSDndMJNJnstUrXznNTGWNP9zvjnN6VGtC3AThSyAbWjuKP6LqBLRswFosP46SjDUYxKdUYV3Hob",
  "key23": "3wXAWxwLJtQjfPbd4UqsSuPwrFVbs3SwKCmUYqA8jrX3DBfDbMbhasJdPZ1VtmwjTWp9JbBxtYxX5CyyiyaH7U2a",
  "key24": "2b8snfQK2bmRgEPBNZM6ZfkEEynikbAGGZyYUvvyV7TV6VnoQfknpDXSmLSziHXLoFFHtjy2EDYnpRdXs2N1ZGgg",
  "key25": "2T3qAKoha8oLg8nwc2uRiRSDsXyKB7W2p9nPNDyxXQSXYDNFMSSbQf2GfH38idFwDdvrHK9wBXG9TMFf1g1Z7Lfn",
  "key26": "2ECHMPgZNUns4nBfJ1EbEGYhhfdf6L3QwZTaZpKRqcJ69oA1yTDmpDTWWQLezY8GrbTqotrUQiwTNC3i1A3xieY8",
  "key27": "647JnZrzkJ34DYzBvog3Umv3ZT9UGp8K15gf2j47trHdRXnZrX5C52ZmSFSxjuHGWushRhR8fjFxG5p2zy9WdoPb",
  "key28": "228rADruaUooH9utBJwVTvKc7XCANxXyLcfrh6drsyc9Edtsdm74WxuUhFmM8fvKt1Unq1AXGL4iF8uuLRE6XdTX",
  "key29": "2h66dEcYVz9edy6K7DuU5YgpgerswctbdWth4og6z69tHkCLxkYMMnwsV6PyyvgDBvGEfYVHh854STrRBEKQSYER",
  "key30": "2GKcfLBt2wVwan7NwVkhiotMuXAVc56gMR95DZxtFS2AcjPCFVELTG2QhmB7Ar1Bi1Mw43148gRNzNZk7kpPM9uM",
  "key31": "3ndxf7Q5Be9Z8NZM5vFe9nBHScdx1AE83AfKtyyrmxfhXwJkyK1pgdFdqbZx48YpDa3cZ1qxX5eTvuTKJBSgBWin",
  "key32": "5dnSKwCwk8BNzTdRGiqttJryjM1gLZ2caxYSdYeo5pjF7pUQ8zTeHU1hUj5Vzvn1MBbtWqRk2iF41jZBwGF7sQgW",
  "key33": "2pognqEByB9zzrugdssnjDr5dbFSXqMHVGki4BAunzKowXj8sWpegLcjpJJ5d2eUSWaKGQH8v3u8fkNCLS9ExyME",
  "key34": "NCzPCs8qrdJJVyV2yvHAwbBR5vW4yiqAd6sa8DbBcmySdNaobtvUskv5wpEqpgVE8ZNWCJ8q5s5Fcxs84VD115z",
  "key35": "3rw8zDYrETwpVL7kF5hHwzxX6YGbnKE3r92LmVjpANxkCrx9zEuZRmYzo1CwoVEudbC1YcNVn8f3YMJUzN6kA16B",
  "key36": "5pvAat3qxwN14BtDtPdSPKvGMWpe9DTykvaPtXVWPDukE1htBVcVoEzzNKft8v31EFpZ76ct96T7C1UZSGgm6jGp"
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
