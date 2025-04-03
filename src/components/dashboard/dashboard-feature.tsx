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
    "3RKUHXGki1HLMWhF4zMAaxNjn6PavWDD2bhXaNuz3nXkbCVihK3Q75EE8byiYPD5AFvWx5qC5TNVu7jsFoBDrJkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y2DnAUcz2LKuNyFB79WebH4dKvrZdqxqzzQkBk9zepSRM5R4sWvJnCruvnT3T5oGpHik3LLGPJzo4corXaJB8RE",
  "key1": "XwuCSVnEA5MPSMMG1bACRzFxFEPmZyjxdMh8GwE9fT59VMRKATq9CTF7waZYDA3aTktY8o7SyrVzzYeejXyxc6A",
  "key2": "4uWnNnNXwDmjoCQjhscbNdfLturBEJRwbFxmEXg2W4xvq25aUGMXzc6c8ttuGkUkt8hXReVgJQqGNq9QhHjkP9NJ",
  "key3": "56N7CHD3eUKwFeufqG9v2ZPyYYoEhVejSwFX5aRk1wZuc2ZpayFnXFHP1pvtazSBtcF1BDEN13STQcgtMQ44ZxCe",
  "key4": "4jpBZWWeBQFFangYcosZFfQtT7LuV8c22MshjvmhEokL7ihfrMhB1h6BeVf8zhYdWuZFexSpVHAyPk9e4XVgnBSF",
  "key5": "5WHnDa7MqAH5skg4EDyRm8LUdraJgbZ6Caeo41vivHuvf4u9AsuDTdp8YoyNxfcsGzYWJ3mmw2hPWQDfv3x6Qe7j",
  "key6": "48HompKXQ5v35MZSeqkWAxvQvV17touhmkMqKfwQFhojsmoeXXvS3FTzMUJZyjRYAYzFF8tLW1b7EL3nuTqAhqa9",
  "key7": "qTeE236KvmAbWcCuMbMJ4TQM4SEu9B26sJporFpAtgJUGJ7P6JwYUm8HaatGbr67CzAWie1WKpKudoMxpyN9cBW",
  "key8": "51owF8cEgWm41kCLUvj6ESbAQk9FupxW3WEcnrPV4tXa4U1cX5NVGNWvo2oCb1Asb3g9ayp5QEctaER2aNiRrdWo",
  "key9": "kH4LatcUKEcXyfGvbLvG59EwTvwwY9LbezfA9biB5idPLqxXB3RiZiUnHiwovSkywk2q8pdKCWFboA4hgbUJpUR",
  "key10": "dhUFhc5tUfL2kyvrvV4CeseedbWUD3uGe3CXsYShzEkX5NggYHu5ZaxvnfeacN45fuFCMe9RUpLW4tBFHMukAgY",
  "key11": "52ePLeg682bRLhckf75BZA5P6hgSyXd2Rq7cNV8Zj37EGJuhoKFQxshoTumULwKghhZRNvsf5FPQGvWHBpCLzbga",
  "key12": "41etxvJncRg1H1DyzCmAJzBF9ibAdjujbJtDPEnLQa3Fz4DRLz5g68sB9ogNvjkPpNUk5MzrFtv7NsyXjVNNUQvn",
  "key13": "51CHvCmdkTSNxePCvmCvQLrbUpscf6usUp9ZjShWzpzTrqqLYftiP8b1pX9fo8MEeTbMyYYWkxwh4GgsUBMiuskx",
  "key14": "3SoNNNZeA3sNDGXZikCMsjPaVWWVp6EbyJXBoBFgi3rZESJjHNcs41NZXzkpruRVKR2RzeAC4QT51eRNBHRQ28kW",
  "key15": "2fNVDgWS5PRxk4EJ4Bd8ywyuB5f9dusnmwewMdpnKnb2JYv5aXuL4rBY63zLgRzdmEtb5DaW8snuNYf99LGFmDTg",
  "key16": "2kjphqG8puLJKkrg6ik629Rgm1Re1KjXXuPMHvkD3bKuNZnQekZoSwaMFAZQc5qP4SMekpgjKCmDJXdACkU4hAW9",
  "key17": "3XkwPxmxGHm4Bpw8am96dG8vniPGhPTpeL8iaGMsvY9hDXjgxUny6np6T1pF1MmBvGeFpApJAPPFwZ2zgKjmrexL",
  "key18": "5N5Fn8ehBzuntdxjzTQ54E7YmQeUZZ9MoumVF3y3bkKwqd394aUELRQ2FdCNH6EuZPyFKpzwzGjTNAqD2ye3poTc",
  "key19": "4y9znJ1axPWvJefNC6vMEhmuKWvo9UPBdtUbU7UtSAGhT8NixfMFiPUGr84Mz1HQfReG8m9hCErWf9rw38B7Gf4z",
  "key20": "4XcZjbyCoPXxCrM8FYEuVFMruy4U4UgxUEeJi5ypy5XteECCBj2Bs3sTpuseYcxHTFz7yVBBNzvP8JAg2t1WbBC6",
  "key21": "4j14t8Uc2z2JfKfmYfMm3U1mE13fTrhuYcPheRVyKZ8J7Tra1cd2SVxJVfSWRzFwXc4aL1WCQFHCy6Yz9Pab2xBP",
  "key22": "2GCjrtGyJfzmLWgjTnLBsmW2jTv1pB6PTzEXfMu3wj7esJZJF8Wn51QVwrvzDrAwkvBnAhkF2mpiT41sZdm2t7MB",
  "key23": "5cd3QAfJkWm1vvfX2HXzWJ28mbCKx8qPCCvbeyPBV58Dd3p1BNMENDwb1XFSo823n3UVRBP5tYNEbyQnrZcYKtpw",
  "key24": "5ELyTPvdRcZdRz5pg8KrAitKTmuVkYo8VhLh1168FRZ6tqX1L7q4NaHkZPnU4Nxw4n6Sv3RUEstTfR2rVZNfonx2",
  "key25": "63qxUUDo7tVJHZF5w4JUnJxw1R7haUTopkFyazvfrqQ6PXZ7vUMJGAapDZACw8Y8it4n8bYsLb1rp8oxYkrFJjqs",
  "key26": "53aXki8sh1LGf7LGenNDxfAFsMUjgNNm8zQBd187YY6k8ZymSUjYw4xkTdzdnN18jUufzVnNWQYDTWxzdFEKE91o"
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
