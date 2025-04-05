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
    "FGY82mMAtgUAsh1ho36mgmB4dr7eCT8hLwNV2CBfSFBpdZTuAHduYysGnHwoMhLZaBUkk67n4NsQX8ZoAsdm4Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hMPR19yNivYgo1JvGg68S1Fd7HS77U5pB2tDN2LDdij1TLZ8oyAK1ND49cSa53UqWepizeEGbq3JDQtRhhaeUj2",
  "key1": "2xLZdXykBm3ax3iqtuFj736rJ2NKSSLKNWRsDuLNgiKb6xadW576D4F6Vvstx3jBRrDqp1apKQ8pKfjVN6SxZExd",
  "key2": "3ZJvXoquZzwaGBtLBEh9RftVuaXujSHzVqVj9QgyN32Fu1boyMNpakXmHiJX9dGPLb7wsYeodtiVARUH29hxPY3q",
  "key3": "2awX73LKCfPMtkzZ2QyE2heJMCoWox3gt1nmmot1BRjwQR3cnMmVRH8bGb9bpp3Nvn4tUeNWyLyiMaAocz7s8iUS",
  "key4": "2LRSGkrvoTdsfpAjqdAXDm9FX2KrwD6EqMZjawpEd14mzS6kgYii5zRQmyjKdRYKix1Z1yh5zugiXnmTNtY9eqHo",
  "key5": "5yne63VpBDmafpNodJkVPUXxKgYtsxngT4uSZDG1SJ9Sg2k7zHMr7tdNS4ipxYPWmt3TDZwY68cRLAv1rzSH44i6",
  "key6": "4UX5S4YxfqSxzzt9kUbSnKd1gTP9pRQWwv2QqxEbFkASqmbTQgXwU41TpabC5kpLkYNH8KdYTZ6SCJ7PiJbpuvMU",
  "key7": "2fXHYAzug8ar3UfkQ1bHG6kptL4eFt2xULy1KGadKiL1g7hYqxbsvrds7w3STfYYuvk2F7LzHCknyfpwnPzpVAzi",
  "key8": "2UFXLjm9VdiSouEgTQUFi3mvDnJPZzxbrhe3gR4WuddnbByrWd9P9vRegBGKACTBJ84iL6vSkPcZei8aB9GpahNa",
  "key9": "5X7nvTL1MX968hD62WywN2e7AcXzHVmBv6CcVW3m4kYegSNhcga7GkrGpzHMG8ejUkdVC7wnaMoZcx9Mrn5fMfgg",
  "key10": "5uBxfmNXXTWjRCMArve9YyGSBtq9Zx2mBxGx7Ze76CwVXKrdkTpwxSKuZzDmX9kv85oZBWFq4svskzGTi36o3H8s",
  "key11": "5DFEa1wbWfwXnpruDwfK8nGCTNewUb7Y4oR59Uav9MvpKwXhbLqtmfP33HTkhoNNQxkG3o1AtHScUoQMDG3kLTRM",
  "key12": "4gJKwZbnfULKsBNWYMUJg9eaaEPTtUPi926WAhR73WvaSTGYoQnyv2n8uCpvmABvtgzJzqgVif4m1WtnZYAAunYX",
  "key13": "5zoS6VzeoSsaXTnjQoDbw5E7PmjJ2Vww6QdGDQ8udXcHvn2pK2Y3qcrgPw2P8rVA1LKUmJF3zsBrFBWfrpCpHV5S",
  "key14": "3iZaDybhSK3783bWwmG7LBdNBNP1gy2mSMtUo9mjSXWAJLvmFVMojnErdS1VS55u1exZvqT1dENmKZnyAW9ssoBx",
  "key15": "3GhcJaT6BoZWazKuaH6E3kiWabxQNEgauwwhh5HUEtPnKFpcqYY1qUuiyVk15TzkKxw1HdVX3wBk7CYgW7u4LtE",
  "key16": "3rFEcabUoJ87wsRwBU6jroWAsb8NfXkzSjPSCdpSMjYBq9iJVk8UtzdRwLRGcwsit2NsuSyWYn83hWKyjE7bzYdf",
  "key17": "2Hne6kj2nvEXumXks5hepDPCgiNAe5WnT3PKja2YXfWc394ceFfWgdYwWUPw8wooKUXqKqJGCnY5wrN4DzkbEVRB",
  "key18": "2UoMSNbrVYVEwUJjr5DqF2wxowYVsCDn5UakJiiqqdKnbLHTN5z5wRpTDzkWqEQYTFpiwiQNK1goi2Di7jTsppyp",
  "key19": "AiybtzspCSnjUJzy9QNKfosjtQNFjnLvA6ETfDsqnnLj6UxwBBdxyGBEmR1fhXbzrvYVoiaPjetTZy1VPBYApaw",
  "key20": "5bLJe4WfiZ4sDt7JktctgzDyY7ERsptQ1EfjvPg5BYmnC6p4uzg52EWf9v9m49zjbVMuEQu9V1qCMhAMbWP2Fpgq",
  "key21": "4uvzNw6DxNXuZjGQzLaiwVutbpA1TvDSy5R51nyTNbZ8JRpyxPPZNKzHaNxomPQVEJP7nNd3J6awLnnZjikuc9Gr",
  "key22": "cGPEWRHS1tjGY1PxQp3VCXXgxtsd41r1kT6JH7wE7JnGW56qqxyBE5btPqX6aXjK6gZABWr5bCVnz8ukkNVQqVH",
  "key23": "2cA3pDxExEkoeJq5mmPbCLnHzES2PsbHiQdugRAzqCFpvqFDUJViBFXiMnDBAbDdnfjTJPpB3AXCVWDcENnFLWJF",
  "key24": "36vKavBuQYv4o4pJyVWiphqgDmoUNxZL5B45in6oBL5pa9BmnCMHTMkCjJqpF6jZk4jsVMXMrr2VX2abEsX8brhb",
  "key25": "4dh8fTUUiked5DWTttTDAp4AXxHP4S6zs7oNLvoX2P72udVsepT7yVuRep4X4KUJxbRruHv7q9twWKCwasodEduo",
  "key26": "3rv8SSaowXkwEviRR6tdsD3AVTVcG2tRatCfZQosgqxmFMcwFwDmrTbwMkFgkqHzNSxR9bSkNztnzsSp4SnPmQun",
  "key27": "5Mu7BNXQkBbgK2VmLnD5k3HWy2ujFo12Wu8QTv2SZN9Enh3G6D7pdxNfp6zPmrdph13D485Z2c91VFK4YvMgad5G",
  "key28": "roERYNLSh1br4vJQXMDDa2ehmhr5H6NPwHoWH7C95CguqXCeTvzDEcaGtvnbRPnz9YNx76ryM4DwcvKr38xEpFZ",
  "key29": "2SmXf33WRwXHR3DnzV6DbNPr4oZZto2m7XjyZZDYmBYVKjQhdzW2ERpgJmEBbACd5c9TNsLn4fdMrtRwGCdS2sYf",
  "key30": "25TVVouJb3FvJr5U7w8mZrek7bxuvKTvFCvZBwjPGz8m3SaXNwq4RbXdr6NqfBWMxV1fSiNY6CQBkkCGsNdLY3eR",
  "key31": "2c6WutMaLxmTgfsz5eaa3pvxtMVu6FHUq2hkLwukborCtyw9yEQwyWh7xfD7tPK4QjjhzKQuFdKBcGT3sxY8otwp",
  "key32": "61Se1WV1Rb8hXrv9nUpKGEMvs3V64zF8dKPh783chUUaZDGgRaG7jpDCV5URwEXAuWomPPHrYTtM2cL4tbR7ZnXD",
  "key33": "51YQQVHePPvLPJG856yTAjdxV516N58M5QwEYRYgMJW3yZ75rhuVe37hXzdssLKW5sYUAQr9wSmi5uARHNK6wZG5",
  "key34": "5ch3NFF43sfqAEmpCjiyb3TpXgJLzWU4GFNHgns3dSVfQxG48nw7BmPNLJ2RGqSTsYt4FHAsvPuN5ZjkRWqQkF4C",
  "key35": "63PcbaXfRUGx5QekSZfaMEZnjBf9Hfh82npAadjPHbpz3tfCGi6UmdAkmaiHf46hTBdxEtgnL8bRhdg3X7iVir2g",
  "key36": "3FSnmisW5RvzyEeZdUP7NRDVqWS9uq78Ygq7SV5kGJY6vFkMUdrgiSdriatwguJHodmFFPdAdiXzC5gekXGYoaMH",
  "key37": "4oFtYk1p8D6xcfw4Uk1tC5gUnDQTV9qcbjBEHsuZsyBRMJG6VGpsawXquiMXikUTr95uh48TaQsTmYdx4o7X5AZK",
  "key38": "4uYHfHoj7UQzFy5U3asbRmUqBHyuYZeYBY4XHcjjqqyA2P2PVN9wFKAJhyg9JbJHdUU62jEZsug1mDRtk53CUeFp",
  "key39": "34XY2h1dbQJUngoNpmtQPsJuhRD6YFecvNSrjwUBo84LjyMrXR5nTJkqeU8Ha1q6C31uPb9JfJcNAYV7848rxwXU",
  "key40": "2S4e1B3k6qRo4kTsKKF8Z3JrwWtDtxJWkvpZEEDuLNRWJRBvgmUNeYxV4ECnBxy62WGX3WvMDQGTDkm8Rvcg6FR8",
  "key41": "63Tv81pbakfAnnMjVbuqWrNv2vUfLqDKrAr1AtKj2Xi4yB25ArW9sVy9uMJr4ne3EQM3u8Cayb9qcdMA7qzXmUxV",
  "key42": "xUqLPTwg9gdqqHAD2oUQmrKr6MdZW6De689p8xMiwrWAB4w7NNaWcFwQEcGWC5P78Ye2DYu1WiBXxFQQEQtDt9h",
  "key43": "2buivYpY8q3WccaDhitxUXjSaYkV3URaWj9FWpj8PnDTBdCyCzsVdwrY8MoRhxzkpskyWPJk9361NModKrfFtofL",
  "key44": "37fTVVNwsBHLeiQZpWkYsFzwPb2vcCGaFHiBMSADitngszaRJM4CegEp6J6tEVkAR3t7ihGifrL7LGq2C8e8kKcK",
  "key45": "5uEefJ29mM9ExpKNPmKsjdurjZwmGNLxn7av2bNFjewhpSbbzgzndarcC8va7JP4Jqw6F7Dw1byVLB84sBEDiCDR",
  "key46": "32DwxZhDed9RyzJcRyzkTD7VBwKm1DkCYpbEXjqu2J3JBvg269jw2tzmAQtDxArr3JtRYvUu2etCutvL3nwv4D4Q",
  "key47": "5GbDwR7YgqShge2iGoPVPnxtFrqnfwAQVi4oZFcwU45v7qeahayVtaL8mehUoFMAzNiiJfyi7aUjhVJJLSM1VREq",
  "key48": "32W78KcjobrkEsbpUjhXuiphLb3Uduo5NJqHV4tcXwPZF7oC2YthAXtuTodEMHEm6AcR9Ga1Xa6RVHm77dEmxCW3"
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
