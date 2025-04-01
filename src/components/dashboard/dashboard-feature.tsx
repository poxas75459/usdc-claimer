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
    "4k1KQmhqN1pai6NzsmZAJgEChcSkSDMk7JdnDMaeRooobuo9P2f6HKb2yw65iF323io16gwL6copFrG2a5D7mwhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJCzHHr8FK1Ygi6VvkPNwh6aEDtRHHAkgGwkeod9fjXtD2WRqpSUayRtmoXCz27fM1C1ToTdWxX22Tvbdq7BE2P",
  "key1": "3BD6Tem4Rn7VuEqgbZ4YYw2ASs9XMWFM8kVqxKiaPa5gu7VmxPgQUs97sbsfXj12NmEhzrzXFA6HCFEtPKa8BkkK",
  "key2": "n2Aevfbu8mKWwNVFPQze4meqHrrJ5D5VN5DTFGFaYFEzRWKkCE57vMarJkvXZm2VdJajbF7bDZh6gBNkEbBEvXi",
  "key3": "D1nCQnHHRMMitHa8uVxDqwBjknp39FBKQ9MYsyqCTBqTEuCWXES4GDKXVJSdqkUZL2bda176isu1E1maSVMUfRj",
  "key4": "3hjo9gyTXCNroksiVFxu2WTKrviGBu7bM74nxUEqXGzbyxCfA1vvpxKdAqofC9cov4ibjSYrvjpzXVDp7V2n6wyp",
  "key5": "5BAWahDjM7GpENQkoc7HLBTXDskeAogR44YTBqYrQJZVzcEc26uqNngWy7f7d6QiHDwatJe6oHpTj6uuJkGS5uEX",
  "key6": "EqrnFX7ZhtsToxcrWN4oLBnRsnoYRoVkYJXTjKyt91VE1kDa43B6cgAPciHdYGqhpxzLSGYirmmuhuFjLvTSUKD",
  "key7": "3p3zBRkus6NiiSrUFbK1Ld3HRNYayFWGweofR3hCmDWJ23sbMtCp9f2Vhgkdy7DFLLSD4VxZrgvZ6w5qK1XMv4mY",
  "key8": "4NFKZchHecmxtP2MXzJLojAbhBtEf1DRudiJZkeU64mHLSPHy95wRST4CRcX3a41ZYXdDq1SdH2VGYPgFPw48ky",
  "key9": "x16ZKSEQqrGDmz6LWPPXnGWdjDrpFFKMFzXC5VRgccadebwnFbLEq6ikKymrt6J9niiga9EGAPCwJsMTy27ponN",
  "key10": "Znh87t9SvMda7Sihqno6FswVn2popBUzjMGnDsdgKJ7MLU6pykDquvnWR357ASydpJtjZhJM29Qv7zW3jHBMXb5",
  "key11": "41ACyFjbYG1fNTu7NrA5ELMMbiwip7QALf866srP2HjAzC5bm1yVtHECrhkNMECU4DnDNrjbhFnYxGYvERAEjbw1",
  "key12": "3sCmr4hFmBHqoAsf2VDsRH7eR8wprAhye8TkuSdmTQXjb7fv63xs7Bj4pyN53ECedrGbTM9ucM8hHjPhL5SHyepa",
  "key13": "4ZjT6nJfRH5y5NAL4QmS5fKMYF3MQmRVTYS2BBiFUu8rLKr3uXXaUtzkvCEa4nnrkPWeMhkBd26W3qzK8WSBTfGY",
  "key14": "39qRPS3tzP1wEHmFFkV395d9Sh8UhiZR5KQgGqXc848CvEphfhJP85MrgfonNpMmjTrrRtdrZZG2wrxVENDWA6ok",
  "key15": "2Ep36fzv7gAt9nx9jytruGPnZYFazgU9LAQquBviZbHa3aZY1iS4ic1ucERKWpvawjmJAnoid3FXxmfJJHBbYbN2",
  "key16": "2EnaLNfnPni2mGmhNvjrMAgJVCo2jb65kv2oe4XqYYaDj2XGFjkZAtssvuwxdyVjbcXXidJaLgJkcE6R9PYh2vu3",
  "key17": "3xLnvCnCJ3EhUWfHaMfRY78bgmeWjePcL1AAVgJ4KBBXCPTNAXM8uTkkAa3czMZbHT5w4jLY1v7t1M7cQiRwsgnm",
  "key18": "2qxLjo4K1NexocnGvnq81ZSj8LkxzVat7ZTvmLRsBLbHULxsCsfSeKLNf8YnchhfyLes69p3Bov4AYuZ5T65p4pG",
  "key19": "xmzK3jJcMZJ5vM258SuckY7uKno3bTum1uPasLNcm2d2DJdHFZFbiTpgyznxto52Ptp7NaD2Kuh1RJjNzkSfngK",
  "key20": "3A9b632gqHDRwnyynJ18XQFCTktqboYT3jWMAxrTuRyZgUzedSC5HRDALnBbPLBVoAT7uZR7qJQ2zp7PtpPuvcfX",
  "key21": "4hewzz4Wt2F5WDg2eQ5JEQxGmJ3vhXzJqw1L5BAUuguRNZAfFVmDnPM3JJiwMYKkJ1xGTbwAif7fKyQte3ivbng9",
  "key22": "GtmykpQeq3Q1noxGYKkUJUgJGSceTh4pCXNiEcTmvY1qnT8CUjzQYGGPR28XQehNwhDwuhB3s9wYgqR1VESv6jW",
  "key23": "3wW3konazw4z4xeZ1iNFwuVje7K9LWCww5civpEFXTVPC6yUaqwAbzo8WkL8wyxh9kD6TNCYs2v7TJujB4QcR68h",
  "key24": "3axkeZwBos9hkHVkhAWipRnEkpyYuCPMcV4UogjbNERmM7t3fm2ofFzmdtRWgMnWiw4Am938ZmVbx1LKiZq5EtUU",
  "key25": "29h4q7pR3dErWvYKVPB3p9GTr9JyRudgU3bppYxXkdserkNPQqMz5EQXaV1AErG6TpYnUt6TtAaJM3YNCnpkq9tf"
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
