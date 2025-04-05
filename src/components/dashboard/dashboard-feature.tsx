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
    "2oBYKwwohbp4LEf9rFJWK7y7vYF2fnfryJeJRd59zaBmTHyR8odpPhm5UZKkoeuUMHRt6CveervcwKgznKvii9dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z16EEMajPUjNUiPhLBa3A7bHq5kAE8FbzvzXofE8dzNVTAkprV5pmzw6qGWCjwYgPsRt7jwe1LnQXsSk4iknmhu",
  "key1": "4t4H7EKmiT8KUAqVNbCmaaU47V5uWpRUvXz5uAvb7QfRoAGNMyoPdim2Hi9xjw7kVYEPuuJtFwDLREVeSjgDEdDM",
  "key2": "5Kdoacjh7MTi9UKwZeBRLzus5wxdYQMHKsnwzY6C7zbL1MW2nxGNvwRUk2G1dmUAxSyFtitt7HK2TfdfHQSrGeKs",
  "key3": "3BLiSSKWsqgxVHeAA7yxSZoE5T5GRhy62d52WUsKsVWj28dVWjDtMJh71CEFnFLxkwhTqnUFpTzuAp5GLuPTDZPP",
  "key4": "3m7CKuUJYp9LQfesnccdAPvnvtNUWFyrvVjd8SMpaphmmpGJNXrwVzJkvEUyT9QgAqAB1JpiS5Pn3mj3fu7oBVMP",
  "key5": "2X352S8WZW2GqQgLv11Cv4fkRU6tMkrjRUYknthWZvBZnpWAPNAfYSWu5dhG7rnRJFwuD8MwSfx52BtJpiFiBTzc",
  "key6": "3aSaz939LhCGnuj4VubUzBg5rxYJkDK2wEVz7gmRsm95kwkWxbjK13CRGtHcB8NTETcpqC2Y21tkufJDikt9zSar",
  "key7": "2vzkZ59H8pyaKPf7YhrE965wSkgpbYWFpQsfQ7NJsMNhvQq6gGz4avPaiwiR41RkEzkqZci4JBFqyWvceCgsu8XV",
  "key8": "VV75UhQgLwpkKqPasQxFJRLGDXeFFUr86ba9XmDLQuuv2VNgszSJyKMqt28j4BXaEVTLnTMtVG491oYisZ68aSz",
  "key9": "2HBwvmkQD4jHg3eiEYXZrF1Smcy54CC9urGwyuhqWV9CpgXoeCVBnZk8DhsWgCfedb7kKcoioKjmH3FWBqSE9rkC",
  "key10": "48qC6HoZhTapdK4mZW7fXwCkvEJ4MthL8i4jeX55n3XmBkWZaGrMz7CiS286JB9D3ubw19SpEuS7TrEEViw3gVzn",
  "key11": "3Kd9pvUQh9HeMHSQBmaEPnm9NHUmQbs1scdbLWXQCLBScPkHEAnkzBykpCWQKVL3ZMrE8X1okCL3Hj4aV1fLcmAm",
  "key12": "3QftdfV7QtksJugv2g4oFGSM6ACS8iW6xnacyjNAt8njXAtW7u6ejkxbZH75xmFmgpTShrcCV8KZeHP8e3a8PPw7",
  "key13": "4KpTNuBRNkDZWkZKrCyK2kU8URJHoVXRFF89dc518H232idpnirGTGN2zQGFHfSr8crRMjrZDUC4z6XS8uZ46yWz",
  "key14": "4HGr43yWfNC4mZ59gZHom58eFxyTtKxWLb5ih8hU3RpU7QCbSzmSUBZqYPbo6uczwzp7yTpsXCJckZnaRxXS7Mk",
  "key15": "2bk15h3qWXzWZ2TKLk3cB9QBh9bhiPi5LciRrRoP26ACtgohjdyyYqc6tvKi8uwCLno4bKyCVjtjZXaj1dH8Xkfk",
  "key16": "2eU5v5hMVDR8xWR7DwtvJ1md1ZLR3REB6k6MenJGxcjWJH2uQ3pE81vNK6ARbTLiESVGnbY8cr2dF8nRyu5o767n",
  "key17": "4m2NmSgQghELjqNA16Ag33p8eoMzXtqYdaBXTE4NNSLyFFuHsGUByB1F5A55NXZB6kTcHknCsknirMuqX6iBMhvW",
  "key18": "4Fiz8L5UsYWWiGLchepypdKQiJCMSvHHdMkbiXgQwcn4o5FLCsbfoiAdQJK4cCaVqqTvXjW1B8uGQxbzxvguQCMQ",
  "key19": "4Fqkamxaa4gZgAnc4n6MqSZFXdPiyipsaFuhayN2rqZGa3s1N91wV2nh1SsqK9cvsFRh2AR8MYQte3btYLjDMSEA",
  "key20": "2eQCqjQSLYenC2Xmdfiind5mshtAFexCh1G9m619YJLsfT5CYBhJ6aE52LughFimfPM19sgAKMBqbXtbbWDXbxpK",
  "key21": "3dvj7P2X4Ff749AyPsC13EeFQU76TDFSkBWe3XbRsA2CGKYix4juuYQymA3X9z63PkQ2x2h4t99T3tAnxtZWwJaF",
  "key22": "65sfJBwYM3CBJqhDv3FgeweYvyBQ86bTiorQgvPZc4HF9BTNHgfhic7hfm4ENCUPW9kYW3FEHsHz5CJzp3S6KqMp",
  "key23": "4gBXJgAjtZY1D54ut97H2ASutoNxgYhbmQSwyGaSnK5iRAqhXgCU8iLNzquNFNQyhhsAgdAqS7GwP2gSU99cte5X",
  "key24": "4imRTy63rhW4g8R1oYUk8Jts49SjdW98n9FpuBaba89Gnm4Zkn922Euha1S1faec7QDQbaaqhWM1ctQnSZoJkpbw",
  "key25": "2HKKtKie4qoN4siPkEt7WaGbY1DPFM6d4ygPBr9okUcFRkCBtjqi1FmrvkNbeFpVHJqwgKFUcaH9ShqKxoqPevZ",
  "key26": "2eJ5KPFo5zg7pe1JwcgiDvJiqcpvk3UBD1RH952rzhWxAR1rHrJajb6j7nZpumWq1ovLfggD8e6qT7q61hHruKTt",
  "key27": "3ptW3d5uk8HiKPC2em7PYGem3sLnjHgZdtq3XPreiTQave6V5ySKbaSvaMtPCFCUQSrMzNkFF93m1eTWAftjuLUR",
  "key28": "pgdcU62mn4suhesP7sDRsbUnyLMsQ2phoVCpZWbnEzJ4nWTcjTz2DV99WB4fduSEq2tBLZDBzyTKxWh32Qc7jJL",
  "key29": "2GweboaR85zF9QoPZQ2HyAwZJWAi48brLkE1XPc2aQS1NreanK6dtqm9JJejnQC6oWWP1yRixBcCimgYER57LyqE",
  "key30": "32smSZCuvLSfBBJybh2Ajwoq1XqMGK8A3ndzpce4gBNvrTf39wdxitzkCpJKZtR3sbew9FYiZjcmY1nTDtWR4eh2",
  "key31": "2umMBmZUP1TTVLrcUHZtSxCrYaDLdkWe4BwHFYwS4dyBEhawDAFoRui3yzS953RHpqFYLGP9pzH9ryir4NSpmS9n",
  "key32": "3g7MiemhsZ8Nf78UfVPjhUEd9iHNSEEBhPLPVqmr9G73yXoLA8WVb2tC53A3TB6F9YCN3Mi3UdJoiLe5CtuQkSsn",
  "key33": "5XgH5Z6yGCdcbuuo2poxK4JajcNrZLnRD6VFrmGeVpFViiVQnGLZ3q8g8cWesSifCYJuFQZNM6yR4AFfBTZNGGnR",
  "key34": "4E7eRUdyqFykFJtYJVy6pzgLhPVPw5FshCszqHFLVHTD2FxMPzcu2gmrL7yEmNnQaMe98QWBTZb7gkcX5eRjQXAT",
  "key35": "2akmSmLb7SN885mwPh3opAT93Giz4RphCkVsz7zjeKwvubTX87FE6XZXkp1D2tgpA6AChcdoHbo5u7xGb5Vde9ix",
  "key36": "4ibREoU3yt2HsZV7wJjdCZejYNdTPHYKtnWWhFmYn3WytDQvdnfeZ4knLB1AG7z7epaQjeAykJnj2T5bNJDbVbu3",
  "key37": "UCJJYtDyuwYm4wY15Rkt7fkvtc3gYNhQTpH5CYuDzPe78MuCpe6wbKBnEY2WXyrNXcoi1R9sLmgAtqsAMv1vrar",
  "key38": "HGwur7bZTo6X495JdrdLEpRhhGAQ5Hsqw5KdqQyMy4e8bbahSFodnf2i48V1jNHNfhSb8LxVz1H8Guvw4haGrU2",
  "key39": "4j9k6YVuwAM6uVMLbYQdzaogAYyhiPwjHWJjJdQGq68trQCMVHMy46VdzKyzUt2xxDG88NmH8FNhVbGc4txr1zoF",
  "key40": "fV5TQ9AT12fJ2UM9VX6bzcydNFHYGVJVXr4mM442eh17QCYLTtc5tdGNWGuJCUg8vhiBj1ES8qnQ5C7dAYD8R8b",
  "key41": "2iPVNxx6dQZUHVda5GEC9QeNTBwYZdsuyc84pdYFK36WUW7TJcvtWVAHWAJ7YmPitDHrZzzgFERdPDUBmPvQHRDU",
  "key42": "67EmxgdEggYYqXoh5dWTsKKNiiAVCMeALTvxEmNJQqTzjoXzqC7FNAim53RU9gPp8exKuBAVrKWsagpVqL1tRnfp",
  "key43": "29fYDvjheHdQT6GcLeh2Qfe4qMxkFqHZWKv3dLRD6hK6JAJcoUnK19pw5KJDgDHawJyUJpVGx3EeVjcutSicY9rn"
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
