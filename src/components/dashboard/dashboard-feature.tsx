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
    "52GnsuFBrzYTvAR8HnWZeghf9SxSmw8y4Cb8hMtko3E5VNNtvDMEqNr1ubr2jywUZ8u3AvXc9cK9hHGuFVv6p2iB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27DQSQLeCfw4zuweo62rXKciz7ZswsuFnraTHa4PVUakQVCunDsXwoetcXi43KoA8VPrTQNXUPAyLRpJk7vvtR6F",
  "key1": "xeus6oeEx519Lfote94kXhkhgrstK5Ln8w2vR4d3dNpYdsTBhge6zBqKbPfbLov8jGKKiEieoRPvdnx4z33kEqF",
  "key2": "5A4LJ7pFgwGQ9NbJHSF15ssjhvMw8zgCc4CnsYnpMoP2jNTRPjLPzCcUzyTsa7QPtQvbAH2uLSzhh1AXPxbhUev4",
  "key3": "3X7SFqYPoaFcZ2uyzq6tka51aGQ95xNDXAyN3M3ayz35xi2AGwYHCz4th2ZF8BSKgbnLCfyHqerH8jKo8m5ccrHz",
  "key4": "5ndCGjyr8MfNy1RSsJTfXYev23LaUgjQh5CLsREBLqTMsjkZry1g6eLypT1iNJW81x6tVXnKijDMFu7eEBaeqT1Q",
  "key5": "4GqECYvjefYvRRZ43Kbk71VryCtfDMn7SwaD7aRJJNrLna2oDeGbQQG6Q47LpMwGgb4x9vXVnqkDQXswZ27ftvy6",
  "key6": "67CAVMwFrprYibSot3aTzKhxNfWYpZ5NAQ7RayotPQvk8LgjALrcRUYpY4D4igr52chH2GThtnUzJDV9NgAhhKCw",
  "key7": "5oRhJpFYZ5ZDEbBrgSwQRTZbk1cD3ua2Y5aFcisu89zTFgKqaW3hXPVR3Pg82w6MZuHXctyccaypwdAupSkhjAfX",
  "key8": "b53dYFLEipUQk7uHGLeUsbhviRCw8sQyb5YLk5tcXw51oRK2tsgUVekqJd1LLpazsWaqKMwZQ7NmfxYNiPqtj4A",
  "key9": "3eQqui7XR7kceg3SHALDKFRkUaiHVuiTotPssw6ZHAoysHPsgFWM8DKYa7p1YwETfvjXGUBvyxGaKmpWmgECohwy",
  "key10": "5213UPNv7BWAoVhyZ9dcG332cnwkDUDxbL1B3uTPkZH2BR3Lok8CJJBqtVeATFmPXW7u8qoxLkUX3fw6nfKFheZ2",
  "key11": "xCqMWKUtYw3CnLQQYW46CuysvSx8JLfyN55gwW7V8iTpvPT9E7RMrdjYR3krXBgq75tcadz5LgkYZg2reijVMWc",
  "key12": "3mwFzTprYiC7iUGMuZxzMBGRtixopetR5uBZtj934zvgCcHXFYXd7VpmMX4BviyAq26inFGDmQ5KiX5Vervs3hap",
  "key13": "3odqcTUZqb974Hvmx36uTjGoUm31WSJUhqx6HC5c4zAqcFG966Wg6BsM5DMtTn52E3uCXwjMvoC2ZczGdBeazgDd",
  "key14": "2x9hAemkkcxnf94n3ksqxK3phcMYbAKT2aoMwrCfGEL4F6C6ggEjZqfUjx1cL6EEHuAbD1SKobcnngj7njDfVZtt",
  "key15": "rUR4cuTJpaFEwEhUgPxVUekXJ8EbmCbAQxJAGMFYWizRMsjBvPwKGWJHHJ3emerWj5BfgVc9JwF4RhUGZMkgxUn",
  "key16": "38fRBxLeM6ekUV7cugAPTWcFDyFAhkhddQ4tFEYeiQhymC6WUbFWTKKkvWz6oJk8v5tmhLngwTFsPvvb1TYUrFcA",
  "key17": "Zbx66ZxqXAC5obrwLf77X3HdRxAvgvs7AoJfzR73TDb9K7BHRakE1b7CR19Q8wdCE2m8ywaKjD5PPD5rXU5SzjD",
  "key18": "BdK6MzECuUa8b6ACczsAxPy4a8McrfBTVYhjNiNTuibHJuJHBaSufL9uvUc3hxjUHvg3CBqaFkq8apG9m6P6K2m",
  "key19": "2LXup9XBEXKN336Cd3kj3hyTwiAaqUe8binZ8LEAK2DwtFdA5qN5Y6x4SUfvvUnq7giJarTpKscvZdo2YRSoJdQp",
  "key20": "hKfmVRYeTEqWz74KPSFoncK7eAuZiZJbegdnLYgdtt4f2q7cmHoV3jKnDp5LGzRQb59SvjxkPCcwWm8WJnhQDhL",
  "key21": "3wfy2CftojwMV6vjPnVcbH2azhcTmkDhh2gjwMVM114LJLBNAuxWYEzTfmKWA22DDb2n8gWyf3WSMZ1Kp2KAnm7Y",
  "key22": "28ZWVCZkPM8bAxZj7D8T3Mz1d8LKxxmJd8vx2wjtF2pJaHV1DmFAQuN2LpLubRnS5BvsWThPndxVh9tKZWKF1c6p",
  "key23": "5Giqnc14NzdXEQrP5vnp5td6pCoVXiyzvSd9hcgnXPwah4Wo71EAP6r6HuXpLfQKtCVx18R2K2sVYPHB6HjSCDA4",
  "key24": "5sdvmBCKoBd4bxrdZFQg3NcrqS2i2huVZzwZqETja8sXcy89QSNRoJXq6ZqQB2zkp56bQxpF6zaRFRZev3J3uYDz",
  "key25": "4GSYnAmZ7jLCX3nSc6Y8tfdzdNzVkwVTUNQ81EVKinpJfWHTSfXLncCdJCfSDzXe7DXHtJUxqsJds1ed8e9ZRxzS",
  "key26": "4smvDdT7gzsy6Stm3znDxfkBkp5UcbQ9f1zJ9CGqHJsBE3RHUGNvbUcPoVQox7gcY9ei5cWBXfDTHrkrMPEjbuwo",
  "key27": "igwa8fn4GBqU6xj5ssCz82FsM65GbtorjzBnXoYafqypLXk5NfUvJyPDKEDTGNeDxyk8sTxVcN5soKuSAp6zdAN",
  "key28": "5a9QQefm1XfhzQQ2Pjfb3VdLxybAeaw8vKoeYF1Tfe6oVvzUEdoDUFbgdrSK7eTYvH38NbBMtPF79pr6LLw4xTr3",
  "key29": "3oDtbD7Ki5hkWCEn7Wt1NJzEW5BLX9K4qmXpZMLzJ8R1bNB8ZpjQP7evNgrg4ZkVEwezPNmT8hULuhH4ZXqqyh6r",
  "key30": "sYaL5bcf47dK5SX59kDbzVc7QXff15cpetg6ojXnUcs4p88kvQeLLTQbvwiWqz74KChEYD5tC4psHfac8u7b91A",
  "key31": "2dhH4XV5BXSfUVoij4QAMkCfeDyXqKaGNC71Qy8yJYmnkrQH18AGpHcnTTBCgpLhTfcYZ1jrLFw7zn3P7kY4pZrB",
  "key32": "vsynxRDQLdXqr9ywpBYCqFcE1bT9zF87syrJWkekU1x2fMv3T9y9Aoh93yg92LaAQZXZBoPpyzr9AyfCyFP3yj5",
  "key33": "dkuB1XyCcsVQj2WkRWgJ6qbtxdERpZ16V3AnpT5P4vbjihKSUQkfS9wxBWCyFGnRX8Wy3SJMCGJM8woa7JRoSaG",
  "key34": "67pS9gm1fbxAcRNzA6gyFL6Va87D67RiBHTAr8q5YfvUsVL3u6kNF3jmwbBdzH3p89DM8zx5sniWyotm5arVCse7",
  "key35": "4ay8ypoaHs6bcLWbcvDnYiWdFtNaTKDLncSzfbxSUKAuK2oLULVGSdn3JGCUQbLkJp4AswfBvgskpgaCDLE7hfTX",
  "key36": "3vRYRj4yrZKEiNPC66aVR38msCBxDxFxEssSdXyqdygJMDM853JCUaLtMDPPDR3TXDgvhxDkBeoVh3GErfiuj6j5",
  "key37": "xTEyEndyx8owyyfaWJoqM7Kmn1jJf5HGqAtoagxgo7cTwPZCE7PFHsMXzabfzb3eMauPAQtNd7neu8EfaA7a61z",
  "key38": "4LDipy57Tav67etFG6KV9WWJqceKJeqLrGzajQduykksAjWcVN7gNBhc2pTjCEXWnAhwNaNxkjr45f3h54RosnWA",
  "key39": "2Kjxdv1fr2EUQc34hTCsiPwHMf98AceJeeT3Cgp6Ah841MrzSYNo2Tt5o4PgoDWiLFiXgqbUWTkM5JgEjXvMAkvG",
  "key40": "44dnT6HFUhhYEjzNYNFvC1Py9cLoeFot6FxZ81RA1GKgpSEz9Ke8QARX4QNQk4svh7mQJevg16nPMWhGUcf1MpwQ",
  "key41": "2rLPkrfCLrhuyCDnsMSQCrzK7WJLbp1ySdm8qhg3SEbvjM8K3xX4htpnT6RYEWWztcRYa1Li1iUu6rLzpYp4ofuX",
  "key42": "4HjMFGEnXMKDWfPPAJqnwRBN9qfebBDDF5gyzT5uWjo2Fe1Canru6HaG4fHsPGfiW3EFyvwbnbx8YQsFrbfVkdM7",
  "key43": "2YRaUq3ADRqUjKW6n6of8ULwtgw7JJg2gcTyMZLPQPevbnCzXSqXMVqmJUikpfTwR96BxxNieU1gnTeRgEBH8Np1",
  "key44": "wfCW8STCiCre4vc5qJDNqLzK514qQDy1VBUEyjThe7miSiCNgZSeRhRjruS72tHVgfhGdfGYqVgYSi5iB9ciSL6",
  "key45": "4e3i8rBJeCzgEXCYq6WBkPzP1rYgmDzew1dou2eqJiS5DcKcSi6rxVRan2BND3DQ3EqwchvDwNFkY4ZpPJRyLKKY",
  "key46": "2Qq54vS2DS6SVDaDvsxJZhrWwEF8zpDiJskESteQfJn8cFdft6Lr8TvW2BgibDQUhXESx19jHzZSCHXYafLmenAE",
  "key47": "7URFf9dkyNeE885MNSKQPCtrMABtdDXe4Hm9fsf9arbnWqudt2sf7HK6XeLXwj1KzJS2tn6udRPkBimykkmiDpc",
  "key48": "4ZVvsoG5J4aeoyndh8EpesLHu4MP7PeMvJhGRKwKtK4vxTVSG9hKdfx1Nd6Ra2RWyvYJZJ8MkYr4Z1pw35NRBBE4"
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
