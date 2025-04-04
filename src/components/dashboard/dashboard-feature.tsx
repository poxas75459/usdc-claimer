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
    "3gk6B7U6LJ4TaCfXNENrdv8jhwVRfbNijpxBddLDf9PQu8ovAy7zd2qMpABR5fKFXFJhzogYc8PdQuihrQRNbZgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7h651vVirpJnsbMji4g5Fs3vCcf4LPczUoETuYDBncGxf12qRapYh2gtq1Ku8pQ9tQSnGqVpTS8Yzp4GL4iocB",
  "key1": "4R4pL2PVasdhCYmvsT8gtoyPCN1MnvQoxWE6k9ih9hEzFCf1knNomhJDbiWdgZG5hTis4sQcERs7Su634WrRygq9",
  "key2": "2MKd43wcyb1FB4FZ1ZGLo8zeRC3oHF23VipobLETmp3P1ETr7aCenTzBMXr6bsRcoVNbeA3D1hJJwveSZATJgkmx",
  "key3": "4fFBoFYYYpJrZSMuMKEcBdjB2u82Ek32Mc7F516PxbQ3fSuRvmrvwJYxC2kULtZPc9zXrNPdsp7SWwTsAgZRufCd",
  "key4": "fDgg5zPNrr2M7Ui4CuogRd4kXBu1jRz1o961MnGX7FGxWbVS9n1L4nyKDeCCBqNKDbMYvff2PxyUMRb3iw7Mfwz",
  "key5": "3GWK9Rxp57xB7zgmD9wqRRosjuY8HUiaYMXkyb4hwrJLgP1AfCJcCDsUDajypya7weACv3prKmXZTG2JZR8jz3Eu",
  "key6": "34CAiJfCzsBdvZ385oHQVNsaCrKFaAv2SzK3VBi3Rri8RG3pVyZPRg395ZsSvkVYDcx9cYvXibzrH6FQd7LboZUJ",
  "key7": "2QaJqMGBhyQuAUbxCuWhoS954nrqxjutSJEAiwbVBzJJnQQo5ELayeWpUcroaCQp3wdvnaZ5SkTQMYho1JX7v35p",
  "key8": "4xFjwarhEiytQhNRkEJrYQWBd2vKAcvecJcY7Su4b4qoqrLkLwkAsV3GiEvmw1Va7igYeXqWie3HYt6rfAH2SFKi",
  "key9": "51rTdiDzoprx8Qe1MWtRXhRuwjHNBDD1Vah7bKzepJ7FTDm1odHaTsUWv94aPPsB2WCC5CfFEvQSWMGBYVJRsv7h",
  "key10": "3QnzUApXpXws5LZoe4i5ysQLY8j111fakoGj4sRfyarQcNwjsLj2vgbnw2afYerNe2w9CYCeiUR9DYbvB2qxMz5G",
  "key11": "hyxkQ4pG2iUa4hxiEcxVLvoVwqNM1nYBZ6boM4zn4VnC6hpXfjeERS6jQobS1UWMXPbP7pDR3bXNpcMzwmbvWm4",
  "key12": "2i3etfxe4pkoJZgwkRDSZSgwxxMmLWyFEpfPGSzcTZqYT91yhwZyT1v5dhpPH7m6Vp5FSrHXjRsEaAVprnkt6gmT",
  "key13": "3Kwt8BNYpHcpskMTrKczMJcFuJGwMsFpumYE5MsmysaJLhFCX4ZoHckGY35dLNLwRgr3EFZFefgMWLCkttrNjoUw",
  "key14": "2dMLset8aPn7adgfbvjvt6UyWsei6tQVcpPFm35xbKkV3rKaifRS91RSqbyFQ6JuZ7dYq9hxb9shfvZ56m3wyFeT",
  "key15": "4xCZhh3pDPL1QB6jkngi9SWsNugNexC2vXnvYf1jerCUjvF3wcWAiGD4scNasVCn5wjTiZRKhJomK1EyaiNiGNyr",
  "key16": "4EdT5pWu9FNHDK9uHgULVxWLq4JqWX4cUKmGYMCX3nSA3ShtUJzgBq5SkP2f59Vtp5zhYM9eUrFzMeLotqvK4XrJ",
  "key17": "4ZjjxeJ9Vw2GnndjqPiARUfRXtF986S8VYswSNy4ZNGd1PiKcuvCu871SCiYH3KYHpbZcnefrtLVV5nuJJsaAZZ6",
  "key18": "5bUegM6kwE1aqWfgR1LaLjt9VEqQYtLTCkJonUoMsfTPTZg9iG9UC1Urccjwk9aWcLDWXdPUVjXaPPBdmbaoJ6ee",
  "key19": "3ACXTB6oUS7mixafseHJEU437bNu19mgxyV3E6iCAooWVijBPfM5AKMhezGi4UzdJqrvisDbkb4CqScESX9WKeoC",
  "key20": "4xmQKXDGayz8BinaACsTJBJyRtwzJjeEZcgXsn89hqA5ftwJ4LzFCo8xL2L8SZmj7MRoroLQLK1zSsjSsbkpA2EX",
  "key21": "5Zy6uD3KrkPhUoCHu7iG88XuVTR3JQDDfVXnh39Z1qAei4GfKkmYtbUUBU9tFSQ6frjHGRiKQZ7N8FZhD5PCUVfU",
  "key22": "5EmT2S89s6ybY4Xy9zYmDwhign1SYbawdUiXKAX8z1fC2Tv6TCmfxVHydDV1rVgU7TqzjHip8qSPSmKeg5M5Hmsf",
  "key23": "29khnFBbR5nVANovvnAYef6KqVmVdRTLqiZzbZz8BSaRxHDmYTF5XfJpNkaPeM17JfcyUhUdSiomq3vM4unn3qDG",
  "key24": "CEWtMemdsbGXPetJxCs4JU5Hg7YPXgoTKbQ4QJ5m2qzLhba7mw9VMbbQGLkAy4QQS7YN1m8sVRFK6iH2wS4KB78",
  "key25": "1aNuw3fYpoCVTvAf2AniHjrk91mHWqxL9pw4G4MP68agieAeUVTbJ7jyNYJthoGJR9RAeu6J3PDzhRTs85soTkw",
  "key26": "5XKispFKCR3KRL7omVc91ANwZS8SmLPF56DGb3JRm3gLoMChbabcsUM4gyfgY34ooJqnMTg2v8NqHojEC2udX3DU",
  "key27": "3dXNRLJ2B6Ym5NC69LaFND3H1jvAaf2AzLZ3V1aNwoXC5CTRBgkPMKVojYovx4dXL6ggi2iPVTuKriFptkxE6rSw",
  "key28": "2fKx7qmyFvaKKMEzzPN986GX2PLUnNfW3MDXMVPqLXxHuephCQtB9MJz6kj5PwJ3vLVUeU4ro3UmLBGLf7QmXp7u",
  "key29": "3jYfoMxvjHfbU4dK4rJ9rLdAPaZouKPMDj1FjtSuXhCKXZ2V8QfdWDmEeMJXTk45KCD33UkCRBnF4ZjPmuEstvzy",
  "key30": "3mgF27RDMe7GtEA1Te1fCzJDYu3UQGTR79DMGKoVTfzk5ungoozXSCpvVMMDW2BdMVFNqW9ZvGtHUNPyLvf2GFKU",
  "key31": "2d8y4MULH4cujTDq16AEeLaFugx6GVYYat2oiQ7syBvcsGeExhzvkhV29sWNZhUYUu8ADt15WPVHuTJNQtRpbJ4n",
  "key32": "5DwFvLbsud78riF6YdwxrhpdbKkP9etz5XZztq7ZYK3xBASSsPHdBnVVFmYx7SePPK2kSWocW2c5gE7bFfFMKJzk",
  "key33": "3dBXyaZeNhLsLsxtSZAWnuqE64Hs3VzS9SthRdrgfo2H8Pf59qZoTMMJhQAR5vxmQPymVBbvnZNqqJLZk9gc9hGX",
  "key34": "Fas8z9bCEa6soySCQ1bnaBdyE5DPpHk7G9sQn3eEEqkohMGbnCjRNHJ8rmdoz524B2CqXkKYH8JpcLSLPKJsuut",
  "key35": "5XBtdFnE83muuSguBXv2bjAPauUzsdMQmL8APkGyeh4kHEs1ziBokC8Q4yVWmzYwWeMRrNc3KHq529kHDrDz5RsY",
  "key36": "JMSs1Li5csm5s8kciJzjiPjRNwfg13yNjK5GtGbP3AP8p8b5VtcdziWTKzG33VB5i3kcbUKS6sUmQJjoaEcrQTb",
  "key37": "yVRDKzPKc1UKMQijmYF5L8myBptFdoWMK6NXTHAj9BZPRXF5MLTkQEKFFm8A5R273xCwpe95mh46oJiZpFuy4qw"
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
