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
    "XQXnrVkF9ci6BMm5tyu9JRzNiNqwBKETZAKXKXzSZxTwvpdv97RERguLcF7Zyk2764bEBsnYnD88Ep8TRCViJWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eo1tmbiS9TgwpoFU56jcws2cFrEFLgFH83yLxeWnsF8vyvkNzRgxfaKArauit7m8HCAfCWGWxuygVHrjVYtKQSU",
  "key1": "4r1ycoTATyAB3sUAMxcfXYEEaQLmPKoQW7Y6cV7p4z9ZLv7AWAidXnowPA5ejX9kjZZoCHaywfFGNAQb4uuqhZr9",
  "key2": "4MoDBm29cKpFTuuu5PkAwFTPNQSUJeJPYHreMnrVWFgvsGswDZDUBnbnaqyAH5j18ACDKi71HX34ToL8fULCA2DA",
  "key3": "qX2v7qGzAMuxkh69Rm5YX9KW6vdicEGfVM3Uu373XjVcu7VMisfCzXqUw6sxs7tGLV7BQsamfQ3bmZdvCUn6FwH",
  "key4": "jmF498A9h6amTdnhYbjypcR37gDQKZMnFxHvP6U8VDsN2GQD5FGUfgyuWJHR8uodPQMVM2DketzJsRd79DFxj5A",
  "key5": "2m1jWzPmhxE8imSzctyQiySwEhWDjWjiuDxFza6U6DSCkuAWG1NVLsHAFYdABAnPD3PWDkGmoJmVmvzWA2P64pci",
  "key6": "5czFhzUJYv2VkMzvAJQceoyBJ8rvaTAP2uE3mqMoWcQ9hkTA8CDpHydzWPzBsyk95WNTXEHuZDvTuTJeMqari3jU",
  "key7": "25y2NaL5YkBasuhHanm4iscFTA8URvYFVh5L7XTJd5WUkRCVem1d2cBoSmT13QwJhEQNP4Uajvp6aEG7dr5E6L17",
  "key8": "wFE6Jqnk7BxSfJHk6p7VoZYoS1TYVxBmcjFHRy8bAmk6ayjsGECGacoXnGHgp273pkzz8b2WRvTAnws41MaQTYx",
  "key9": "4jT42KHgMPGa4bjkMnpPWefhshhPWp2Xhpv3gm18MSYKW4NSH77usaLc99aNwvnAtjuY64Lk23GoybcDNMKWM82W",
  "key10": "48U9GTu2dDVggmjzpowrS6yC5L6gvf6S2CJenGtGA8vsvkf5TJwEd3caoFcKmRoTuHpN7svRJWwougTV1XJDCSue",
  "key11": "2TbsFZMH8n1i74xZ8SqBRabdGw1jgnwWUYkCDdbCARHWxTNYfraEGYnk4fUxb4QudBws72afEbvNjGWmyVRXnXLZ",
  "key12": "8EXm3SwSZq2HQchLRgdxibRDnQxJ68S2g7nQcezfS6ijWVcHMj3Lv41QtmCG8GGhNsdvEB9PWVC5ZPaAUVN8fDu",
  "key13": "4sab7BFWXsgyToB4Mug8jMfaT761swrSbGQvkS2bNeAsntK96Xgvhm7pkMdcCAqbJuUQkps3weYGxSsGQt7AUAgG",
  "key14": "5XfTVufQCfZekNpfN4sfzx964qZqJ4XDXPKSzxXkq3NVQmx8PDn2Td5SJw5wxYr9Br7V2gQifgrW2t9sm4KXY5RU",
  "key15": "39WAzKcrenhxUrg7geCPntyvBMgvcDSuL2q1sfYnCEBU4v232CoeUpGDMH7aGnXGnVTcGGkxcTy5LaCJYCX2V6Av",
  "key16": "4YVHyRwMRPshvSzwMNAMywojco2N8wc9f4U8wJJYFHRNBn89xp3gaEMKfTQ37vwucB1o5TiwMYBxYvehzeNzuvHX",
  "key17": "45P1oMxcGxTe1sPzt2F8rPFTXZrEnYaFDN1WWCHXV39EjZPDYpG9ch11zQFUi5DpinCd1DwzshtumLCCe9u6ALoa",
  "key18": "5dpccHXVz4fPC4P6vgy6L6KzXpmaZvVdKS4GszRWP6jKMDCkgtLjaVLgNczMfczVs6xGrCq7jNuV3aZvmTzmg3yM",
  "key19": "4oYZwt2cTjdMs2HRgisdBr1iVGPybevAwqGXQCEXPHiF3DsHuTGCjiGpjeCb4F45sYudtbaeBV4keeKeAzQLidgm",
  "key20": "386Bv3hCAwyiUEZYfnVAJ6YDzGKEcVrHKBBfBsoTa4vhhRCf6RW6VUoUJ6nbFESAajmtFVYgs9eGw8QXafsiJp7e",
  "key21": "5k5GRvCt3ZN4iVmzcRpEZnCkWEazJa3jXZZQZteVVSJJbMYAXMMp1he9a6Veq8T1M8fX36RNiPre85GBJq3x7Qt8",
  "key22": "4Qr68krWGywzGcHkjFmXQ4CaspRJjyBywSXLPdtqhvjjGj6CxhsJk7fEvDcHVnbpRxfrrfnscfDBCpyEB66N9UfW",
  "key23": "2FEJNLPoqPbEnY7cwBXEdswnhMioZFyasDdwrGEfcztbPvVH8sAF6Dim1k5umdV6PhJJGPzKyvsMYKFqW3PuFNFQ",
  "key24": "5RTTPBNTyzo35L3D3tiuWSwxmNFA2DcpgZqK2YRPSk6kdnWBYveJgHjUropRe7fY9D4CqFCuXXacpuaPSKzKUmDn",
  "key25": "67RPkH2mqUSevrYBQSUEwdGip4azCDwkLvAtKRTG9eUWn4fS44TnuEgjZaGdqrjGg4mZqbLQitgSsLi4DfNhVjYL",
  "key26": "3PpTg6PuYjZTZf1WnfCpKJRG58nEPh6Rjyr5yKkwT44mKU7ba6GtoMWrrCKNubYkdDdzkQFnHr5Vbkh59nEHXMmQ"
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
