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
    "5dzwY6EjxFbVgDDqjy656AVdc7ovYmCqd2WYs5tLF4G1uRZcEfHp83Cep29mRcswtMtagAwfFptKGKyRFHD3ZQWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2faLR4Dty5NJvjfPxkdQH8SG47jbtTzYupec26qySTQkSAE3psjchavrFjMjufHtvGbEtuEZQtzJHnkyX61KuS",
  "key1": "3csSTpHgmWCHvXKqegJDLSHj6DKRXFXxNhsjuVDLHzXWsx4cjhf4Trs5sJZtdFKRZhWRHQaMsK3SducUoJ7DEJcQ",
  "key2": "5UBGWcXDxxDWftmSzzMryt6wwP3EsmRcwJv57fmbEjeVTqF5dPfgB2k7GD6KqecWBmxqjbXbusTUXx16PAbpXb9t",
  "key3": "448CPBFz331psDEN7v9jJjjukW38u4oxxBqsrxmGsMq6FYvTNcfYXWfx7wxq9zJCruaamUF1aUZ3usX69dkob613",
  "key4": "QmWeaUmBQ6AWVpWpppz6k7VDhEvVDNRaZYgmYjWeWAvfhdzEhQSCcZqE7Tkpk6v8MiftQBP3imZexT7gWHFaAdm",
  "key5": "52jXy2RVTsjSLSHGe7VeG3jYM62nsam8rn5Em2R6HCgeQP9maxK7HYNuKXKUBdzJD5NvKGuwQXmbUSK8Mkjqypw6",
  "key6": "2jkjvSELftUouNK7rKxPsPNnQRZY3xSDcALqaxpc6LLptNHaVodxUDyMeM3fAXuw2Kqv6N3hKbDLwaP4BRN66CD",
  "key7": "4PWLgU4aycNTkcUvequH3VCyJzdUm1SYdhSVucEb7EHCGeedUf1sofuF6mxuNFXY1FvB7gQ1JXVb6cZzrD8zq3Lr",
  "key8": "4Zp1AiyBodozg2FbZrRwbNcSk59VGKcfkw3Suugm3ckWGENCayYDFBz6DuJ8yASrMBxyWecrw9bkE7ySdeTy1X5A",
  "key9": "2EyodQLqtZRnPekgTBfkvzrsmqtG1AZaj3vBTYgtbBaon9qEaiVdM5bkexR1wpNBVh1yhfdVUQcXpnVZH1DQ36QZ",
  "key10": "gpr2zx4f4aaNg2Nn4967H7FUoNGMEheSbWqhTy5pCcgNNrJTGgk6R8HSHxrW2Wpg2xag1tkGKjjSpWNHC4H5FKe",
  "key11": "4Ahehz3Tw2wYmw6GTggvtibZhrdodN8cTMt2qGaWQ9opi6trGXkhjGENh9Mcd2jvUuXsaucTNXAxKGWURDCgnAqP",
  "key12": "2e7k3pbD1kRRmmwU4RFyyxQFbG8oHH9kxKYSB3cqLDbCKqxEDc8bZSSFv7bFjCmVxeydtZ4rSRJEh4mZdWXzsTwq",
  "key13": "2iwYEZp5e6HzSRBZaGJDkY5uMTe59BWqzTjAcW4CMFshVFBtewKBKLgmZVbmECT2VRdb6sxNaEJ9uXLMPhCoofMC",
  "key14": "2qmJTHvBc2T6WPuemzawU8XwT3Qbp79Vs9Y2XZi3hZwaQDMiNayuB44k4nNQu1ApnMPmycds33TjLiMyL3aWaCf",
  "key15": "nTB8DpcdMx3YfEnnp3qyi987Lr1xxUcnQXoEDyrcF7W2fYZPbamSDy4mEkiHzUKzb8Dz5w3mwK21c6RFkCvWN6o",
  "key16": "4bpzUbmHNrUQ1Xk6DHdqN7JSYrRfrvZiDi13g5cYkeK8UtNuEBvqa7VQpfVfwgPnLmuvZYytKCiT8ca1s3UJzknj",
  "key17": "3nhy9oVUjSdFGRWLUDA6XsDT9VReMTQGH7tgkVDGbQNaxEPY69q2T2c4KD6Re7tAxuNqQSuBAz3zDq6nx6XdmDeZ",
  "key18": "32zdGATUEDS6k2AKvSY3F79zUHzuNwViRfBDmNUzQcXmuHbKW2qEfSpTFyBVnBcVVMweEnwSjxp3QkRPCG3tysd4",
  "key19": "62JEZhsaViWuH7iiXr91Yodv5KTtKYtYqZyoMtg6QKs2BGVHTcUKsjJ7zG2nYDyqLFwxErUWG5j52zN8A4g1VXct",
  "key20": "3C8bUauD7DfwfRmduh8UjiBqDWYcKVukYcm5tm9ghFAZhiqikCzJpN5BqVu9K9uVrpwq6rSNzWN3MLpi77TugJ5X",
  "key21": "3iv1nS2cEUvex35TjCM5y1KFT8vYwscCggMJqMnFef9adczmA8ZyhxTJsxMvy1RBhNppdvigA3uCr6caQwTzNdxP",
  "key22": "4Y999ywRLrrnEJZvndrEhRF3ohArTGoRhpvR3azX2htazwn6izsBBJzzFEnohUNbXbxN3xfh8p3izes9N6jweBPb",
  "key23": "2MCGUv57Fz7bZNFcZ3SibeqoffUtDmsDfX7ry4SwSSe5HUgCKNKGVxTG2nRzYoJSUP7ARvS9QbuBVzsHy3ntTYuQ",
  "key24": "5vLnzzXfsnaA8erQ3HuaAj1xsmqBfqJUX2qUmp2wmn4bqd7XbjFQn4f2deKHtijB6fupiWwje4GuYGfhGeYEHaZB",
  "key25": "48JFWB9ShrtpvAM414PcFYc9bvJgHDcy7LMjWnSvtykBmUbxsgF1ovRF46eTSdbKziSiYonDNiVYy5ZapKHr7hbG",
  "key26": "3jDc8SPx2szBLgKH645LzHqZkrZAfiTrSC9DGsr9oudKtnFSZ5vbBiVXdJ7Cy8xaAL5sgheVAAB53R7HnmMRfiGk"
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
