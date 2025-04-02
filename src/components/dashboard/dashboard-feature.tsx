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
    "5R1seeC5e4YkgL6da1XUczN8S8WTWenvXpjw147b53cf1Zkfvdut83zq2wdAA8yNrHiLZMULmM8mELja34117Upx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2omcMY1t46kHRsbM9yqtSgtWoLjaVpBDq7RbeEnxK49BZhiv2YimX5qa68Xme1ZQQ92VFG16DYZEyZRJCgvBfGzz",
  "key1": "3gEne9LjvYdFLHfeX5mwztpyauUefYwSWC5mc4afVRNHpBwkPUTCnxv1GkqtVXoWzvAXiTuyLSH8TgjRXtySZAZ3",
  "key2": "2uDcBWM2JCk2NqquA5NseeWThBiZrktTRNSyBzT7dGqSx8G8XsY3wxadFE2xY7jYDLGm22N4zpAhHEQRmpYdgBkw",
  "key3": "5ywBJ5HnQFb3MteT8pKEL8dECWUpK11roRv4qs3XbYVjLkTiwpZTUCum4deFAB5pAjJ5MTonPRNsvWBNfyn8LyAP",
  "key4": "4nPJAKx61TZD35jHfdGfCRiFFvAWFZzBABCehxRyN3tXivCh5b95CpMqNxaBRbU7FTXY7Lvd3uoVRAejb1cHbAzi",
  "key5": "3XzvnDA2QQfLXqdJDbvMADYjLLh8Qi6zT7mnVWgYDB23iJcXrj1aP3TSF4wWsFUU9CUV5mXFtccPi4j2z7hT6S1E",
  "key6": "3gyPv2i1DoXz3h1PjVMbWLKtx3ZBuobwnkeLLwhJdda5fKLUL25TKzhAmAwZ1ea1M9m5BuQYfqfRRHvDpoaiqatU",
  "key7": "5ypABBx9nUQUGNmpCoraB53miN2uRgCdQhZoU7A7WaRzsB6KZb3Vder8ay5hTbeHDWG6Xzkp487xcdB31yVVBhVn",
  "key8": "67cc6DFm2Xx3pDBrPvkiKnBLUUV8vM7zRKkH7n2ysyH25PeRt8KhZccFMoJrmo6by1tkos9w3jdasMkJEPTqryhF",
  "key9": "3funCNVGWQHcqm5mrDdP5DXkrJtpeQ26z2gMaZeX72jBE2Y9S3MPGkLVrmQoqmErf5it2tptwYbeJxicnfFdohPM",
  "key10": "67LzhWXvxj9Sy1DkDvAZ9kmSKHLZ9a3R6NhKKvygzJTYbqauWo2XuAJDdez3ZQr3tPFTeJi4aP5NL7qiXN1U3bKd",
  "key11": "4KBokvtdXhqgafD8M63wvqVaEZHjsjTktdifskL2N5FnsGk9eNFT8e9dAQjmFVEsGhon5fvr3GBXv8LZCZ6cP232",
  "key12": "4uxyA36wc4roRDYhFJQG4HicNtu2v4EdNJoFDRasTHKaHcDVcfqqUHxjp4cTqsJavCgzdobftpHjjm76pesMpXvu",
  "key13": "oqWBHPpz6Jv1DvrdFgs7e5ectFYjnyciaLSNwTvMMXdV9AMVMzc7ZMBhHZxGWhiepDuxCRkgZVYUqzRZbrGiBsg",
  "key14": "7bEm6fAY1sWr1FZvXLtUysXPGxKvVN8kihCspy6JnRafyvq3wUSTGZBhJT9LSqPc1n9mcsTJWNK9cUnLMziomG6",
  "key15": "3Z4o31FPB92hxMkerVUHRRRWes2kv6jvzHSh3sfnkbMyqUWaC2NeU38T8mAZgksuC4GyDMFhHxJakFEnCjcWpCGi",
  "key16": "5Ursg5S3gGLzxAs5iZMQFF5MFp5N1cfngU4SAnS8opzuasgZGts2LCixjbARc2v77y5LMsh1y6ERsF3Lbd19QYs3",
  "key17": "2bm7BTrFfRB5c8rHWticT5zqBaUqNFoUxZmYQvZV6M67SrFov8wMJP9uHSWuUMyP9rkQSLFZnZcGfC4tKfdtvgCg",
  "key18": "NuTm1uuvf3W1hW8c7LP31QoMFa9qQHF3EGNxb1oWqwfbH1j9HpZ1k7znUzRbXWpKjQzYShX877iDJZTSGUUMREk",
  "key19": "2f9uD3g4jnFKQrArv32b26meT29LuTXB2EubuDzL2eziqPTFtnm83Aa27vGtrAoKPaxHq9o2b1q92RxC21PWa6Qu",
  "key20": "vEkKitU2D7LReNzkaFA65tAV2i4LNfqCFyVg4KJAbR7Tq6NXS2maypLsVbMaBvcjB191qQVu2Z5Ms3yu1y76onG",
  "key21": "51u3qXCKXCWP2U5x1z9XfLW4YJq1bnqhFfnzHQAkKCE18L9idgVZRxHSU7931p1WVFoABvpf7p7kxYstXpFzqpKK",
  "key22": "3fxZaB8ntFPLDh1HvQN2okBphjEzVERywbDQgLoDA8oAf34cNAr8JiysehrJEStQKQLRPg5R9fNJtgEwUxCeyofP",
  "key23": "6679tfaWnm1bwhSCZZxACpejgTYbXcjtJMr6SfuKyPU713vZUx9kzsLggMu6vFjZPhf7L1qoQLKHX7h1j8UJxJM2",
  "key24": "3BLWHMUipnYFtnRpiuFFiBJE5GyoY9FoY9tNJUCvhzwGPR8BDesjam2dx5327ndQeAZAS8z2Urp8E37hL5svTdVt",
  "key25": "3Y4Q9P5QUyA67DnZ4MNxDaJHMDCGoozKeKVa4KnFby4KVgUtyCDZe761BLy7NqaMfmEBoqPdXTGAbPLBYXSgWq71",
  "key26": "4wXMQxzqKXQbYbqAjQc1qnUGrPDSEs8UjA78H5TewkUbk2G3GyBKdkHasmyiAf4R8awrtoLVoJvw5wSveWnNdGx8",
  "key27": "5s1ygVvnDE1NMonrytA5kE7YMHqSwmmAht6KQp6hqAans4C9TUB4CZ9t9rxLzkcVf3S75bnwcV2jEio4egYmZdme",
  "key28": "xGFU5Md682ddDwtLpvF7fJni1fQQKtrHhLfNVNHftsrgr7cLAswgDbG3h9F9PKwY2zBbTG4CsLJCaGrAKu8ditE",
  "key29": "284DTdJXZRHR2CAxGyNNxbyYedm9M3Rsc6bhBFV3M97CyAV3rbTawtf4HP3ftys4VwUTPnc8CmSvnpSGY2FqGKgg",
  "key30": "4HLWNdbQ9ENNCxMcXJSwu2NHc5Ga72AkS4aiG5Hu5rcaVFtf164Vm8zChsbbi3eJvLEnaNTg1vy1QExiknLRwYxa",
  "key31": "2p6hNnonfqfBbkuTF7nEAXwBVXMVcdrVgFHzAird4JYUPHPn7Y1tM2qsirZ5XESC6HHjdMaKynEimRALfBJgMzzC",
  "key32": "4BwcUfP3K73KgtbsiCTnZmppoj9eNVUkCU4nVmbMdVR5iDhRZvJrbF6gC8cn9X6dRSM3d6VxByebhrct7DKsAyW4",
  "key33": "rpZJobzWkZQoeguMg22jegm31sB4fFSAuZgkkT6hc2vgyzFCjwWyoerbNaGpRHYCLAHQJWft2Lb5muRKhHbWUbM",
  "key34": "4rEiJ1fQKDX3yz9jqbSmtwYFrAnXevwsLTgYJR9ZrTTytfVuEVSNBo3xppWoc12fpmWRrcDcaphumgX5fLbpbytw",
  "key35": "hXBVrrN3CK8nG3PLEkDS8WftQxAGDK94NpmHLGXoDFpijWjgxniKSm62TEyM4N2P9GMhu9KX7XDt1qi6zagWehJ",
  "key36": "5amfancwkf4wMAqEEyL4dfxRc33HM4ktoXJSQuq1HuBceqoFSWWyhrFL8Xh17CbYnDvjL2KB4oWWEz7wLSjuA2Xt",
  "key37": "3WyZwn3V9A11PCYwmDVeCZTC34vK6gZgB723tMrHdvNNrX6Pw3r8jMUo5dymmkgqBpwiDRnfs66Jyt5YnXE4Vaaf",
  "key38": "5aJ2R3oGBqshyUcaU3NeFC9v9dQNauD89jfksjjjUY8cKw6Pr8hEGdofYerrf1SuULSopF3njHVL2XtJ1Zbv8Jhh",
  "key39": "4LYvHE71SHnU5G7zfTat5ZXWLs5h4yk6qrs41G4QSTFVuyHbgMcZA6yd2gGs4jBPBrxkMMsJ9bJMKTEJhcdcpX22",
  "key40": "2vmbWgn9FYm25SxeRhGMFgBttW1t8mWoCot7RS3qBHYYkaCNKM3aHqtjfy59hN82dGggu3RYMHTyHQfw3Yc2JBx4"
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
