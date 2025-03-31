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
    "2iKYmmqkS2cY9PkgW5N43a8rvLvgNznhyBdGd8jCCJZDfpnVhACdn8j3QeXHsGgPZ7cdW8i9Kj2kjwpSHJ8S7vV4"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "417DNdLRdSvYD1H3Kg2K4uqDFpNnAtsK32Mw4weNixRbeF19rUWGNPCxCZ1QF4Fp9VbMk4nwHDx5FHkp5NdqJc6Y",
  "decoyKey1": "3pcmDi7QL9Q4h8nq6soyWK88YWE2hqcog2WWyi3hHzeSt8MxTXn7RVcFRp2useHSDEqsLkuVMB4hF6388AWAdV1i",
  "decoyKey2": "59YSMpG736kRFin9SigVimqtFaTFJBTur76zTDvrwD48m4p2CithJ1oZwCPdi4rjFtH23poyb6bCRMmhHenj2hkY",
  "decoyKey3": "4btGVPSwKJxzBvbw1VgtGGQa89nHxnFEuxTCTtgAnKpbL3KDTaER27RqXuGCDAE7BbSu1KXFM5WcyZzJWtkUgToo",
  "decoyKey4": "3g1oUocRkeaoX8kXv5nDXqPDUKZPy9FtSzCiNhn4EMkDuYmXvrTMowy3fqX3Dh1ijnrbSre2venpozQXiWTbWNYA",
  "decoyKey5": "5nvwsEK7aXgF37JL6XLjsqgrYsLhYxLoB1q3pP1g8DRb9VCk6tcqrW42vCuVXGF5fU2vEdwdD1SWCjgMbuuvh1rG",
  "decoyKey6": "3t5xofgvYfFMj3Mmitzf59xnVWzR1WX7WA3uhpfhakJnND1p7yrs6jSTvxwhKhHq9dt8gMz9uXAyWxziQ8XqmKYh",
  "decoyKey7": "3Q2d7FkNZUHTpDrKMKXqgjvE5cnJyVv8VwYipGV4odt4nMgXdcBQSqFJ4cWVDsEkjTX3M7MdmgdECRjyYpwdSTHY",
  "decoyKey8": "4h8UmHapEFgcbz2KiRc49ti8pzRwxeD6J6EK1jzWW7AcFxZFj4kTYsmkZUUnuCFwL7n1SBB3xbi7QrQUoWRvLsDe",
  "decoyKey9": "4uVhLMhQLMP9mtMpWyh5XmLEjAvm9o8SQG5SAPyFN59ZdgoN2rfLUPHsezQNe9hcZ5D23k6tcp3sGdueVKUBGGW6",
  "decoyKey10": "Q3N83ogQDh9nKmtHcwpgbQozutWFc7bMQNP4wSG6nct1DmNQEF8SMbkzGSG6rTmb3YQu7G7R7UKBeceFdGyzH9h",
  "decoyKey11": "5E2eNxXD1Ur6oV1JDyG7D4n7TprsXTUUSfyUT82un8EaJ2o3GYT2BMeBPKbeDbgiyr3FgBYL2kUpYUfF6XjFtEJt",
  "decoyKey12": "5DzHDoEL8C269oQwRiuVHHkpEZBYEDJVZvH4M5nq7xbrdaRzRE2WYuuyWwDqsZCHyQHvSDfosLvqLtgdsWX43vj9",
  "decoyKey13": "3iSmnxnWq1kuBB5VaKUCftFYJXZvdL1wA6TYZyHGZq6AFprZMxHBo6i1Zey63826LTLNCkUJxZctsUvZHBEaHJsb",
  "decoyKey14": "5NvKLxyb6ppM6dj9qg6yc4ZoUVBCT8DaBpUP4e8L2dnExcbMsiS9wWk8KHNa7GdnCXSfaFSDEixGWsUvP338B1d2",
  "decoyKey15": "4fvL1kFbvaztsRhuhFuTEstRcR8SvumUe4dQVmPG9NvpmdDPToF7kKUj5ijpGNRJFGoapb8BGet5ukusPr2RcEaN",
  "decoyKey16": "5RMv5hfYypSKQghgnpT79pEonYRYahrcv3MxfcxGGeT8vsuGhibk1MNPdTmUWH2uYSqARbVXyTQpU5bEbApCeF5Y",
  "decoyKey17": "28B84GTp8g5PFuTHwLVRaRsDjcLUQ9fpUmfCtc8r5gBJ7RhwNdiH7eoXiPh8tGVYzZ1uRKyND6PwBnoMwTwViBPm",
  "decoyKey18": "2YGKRYi6S7e3zxfwiMKFJtyHWNqpp3WDTRFPXdQx9wssyN6oMGvA1DC3QZHxWr6wtmbQ1GksrPf4Ux5qpHmrnHjY",
  "decoyKey19": "5RUVeF4SZCykEDuBxN2CtrDZrR9BJnpXQ6YQVMgpPiuH2rX3DYfznhqqPTt5ewCrPMMRxyjonGowYbL3WZBbvDrP",
  "decoyKey20": "3i9mArUaa5qn8uiESYQt6meb3xxfHWBr2FprgjuG6PvrGqHsxmNTVvbwfNytVErWMW6UHsXCZjBPUqTLVFFfgjUm",
  "decoyKey21": "4BvFNbuArtWo4jkF99D6iAzTUxC7HkDN2ijWWTwi58jTawL5mF2JVmSSZD4kTGGkbKCLEieeVsvkJSUkJuBS8Xe3",
  "decoyKey22": "2Af7d49fKuKq4vQNK7cMMcnsRtx2VQ8tSHV4thym14tyHHdBJU8y5tNTDjL2i4DVB2aVBUAK9nQHNhJoPNJJdn9n",
  "decoyKey23": "QTgScEYezSFqF1pQGC6bUoGsMpL6zKymuEB4gfw1nztceFi3Ws6ZHj9oB4VKFUTKPLHD4TWM3LQqPxmxETZpkBR",
  "decoyKey24": "4q9wPDYd6oGRXzXN6zbtqEwTcdfjKjghepkHWKJhKSNAVPRiRrckU2jw9Uund3NoSGU2DiHPwSsn1cHrQQDYzhPg",
  "decoyKey25": "JLfrrCTbnSwML4LV6yMF5VsfisufgR6cwunon83VGaunfsXs9rtZfvv1qSHdkENUf1DLrZZx5xfWPUb13GVGMRd",
  "decoyKey26": "34BjMYjv2P8Mf6mcmHN48pvTUeLAiPjnJZryKqVfZPDzPV1rnNNn5GK56jLbeVKXfL155M7qSS1dyeu7uZ4Vn3df",
  "decoyKey27": "3PttqhPFmHQ23HXv9iCEtLoEUEcmNxVAXKQVk9BUR1n67ABgFaxrFKsgqHy2EsgjhfTeyiXJ2zNDDw22Sc4ZJqop",
  "decoyKey28": "PSQ6xb2cmFt5AvDfrvkzQtjsqUTg9ucV1sG9UARhEjYFr4po7cWqGaxNU5jjGoGcevTKP2dsYpCUo95fgGU8m44",
  "decoyKey29": "62VJadBi1TunTapS6f7eLh5cMPS772iXeFiKLetEicuL973VYZRKTjk66XJdXrdcU8nZra6wuYJYTyvffKKzZDxy",
  "decoyKey30": "2wD4b1Q39qrJcHLsbio6PRgsiu3DbPCkto3Adq7F3nUscA6HR7AuzGgGZAXJENFpJ1hcfENTMDavJucY2HrG9kNV",
  "decoyKey31": "5F5UixRBRqmJ89af5R3UC2dBSJmzALK99fmGChRzmkZJ4mnrrTybuRHakrZyWSWP56LakNmkTSVfjBCk8kEpkxS3",
  "decoyKey32": "41WD5DCLMJmrfLckjwDAApfwMagNJTgP4BbVvebWB6HywjtRvR6N59yBvPxqq4A7Nhi3Bygof963rWsHUCGawxKB"
};
// DECOY_KEYS_END
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