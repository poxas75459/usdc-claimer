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
    "4fZifoiFN7qBc36b3CKEkePeWSEVRML4ezeDzxxDrNEsaS6QZCcwk9MCCx9x1fMQgDFEdV81VNioVYMYFFSqgjui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGsgEcV8yBYo31USxKT5QecXvLg4aqqjsVbDQDSzS95VLScaZeEgQ2mMu8TyogPs9GUQYTQS2TbVBgP2tLEERzk",
  "key1": "5KubXuD65c2UR9aDTqottA7P3SmtZi2DSsAgkhGbfwTKkyX5o8DVAWoMzJPKF9gD9F8ueEgyEMtvQ1hQkL1bVJNi",
  "key2": "3GWXTEDyxGU7d9eMf5FzLEprTBnsMDxS15VkZhqymm5D4w95VG14dwn2tNQtKdgNvfw1jkqELhdkQj3qniy5g3co",
  "key3": "4pmV9UBB3FWyGAGjYBiVRfGWANyttWqSc8QKkVL6YukXrDDnrbK1HBssUQPDgPiVcUE2cKTU17FqrHjYndtZYsWP",
  "key4": "36pP683rF9znbheTJnVb6XitjkeRBGwECPXBQuv6pvYGpBBrcpPYBDSuy3uqaCwQPCH8Jg1RajFJsKLhMEwMBDcN",
  "key5": "rq8SawUuBEHy1KP2G9uHwNPEER9nXfad9dDheXe8eVFVF5ojK7kikfssyzFDqMs45xnPXLPXuhndFykznBNBicX",
  "key6": "3QJzuYC3j8ZxDE1xDwmERc8pUPWe6eCkSjUtTXL75m7smjUPRjRtjo12XAVfNvttEh1xFPufaysXAngqNDbwb1vp",
  "key7": "5qDPf4egmsJi7qXpZfCJ2ifLgvaWu3aeqfkTLDzHKURNfHVg3LVE7Fpd1qMZk1isSBf119T5CwryjHs7ttP6rpk6",
  "key8": "523TvGnSxX4PMg5EFvDtSB2E1kphVeAztK88z2CYjkmW3aP5HVzxFoBrLPZtVMVGfNsGVVe5UmLNTmsEJbV9xuJw",
  "key9": "5YnT7Dcjjv3n6rSsDfiiEy99UkQ3sfD2EfqctfawfcRjPV5zmqsdxuK3LouhRRKBDWYmShp7Hd5jKSdwgESZjx6n",
  "key10": "2iojW7pAgAfELBsMcoG5tdBVLBfK2tG7BpLNDB5dMti5hfGssYoV82emUEadNmxQUHFGonCdKR92pVJh4kpmjZqC",
  "key11": "5tDLq3JenGHPWVLsNt3tpK2ZnbEuN6y9Gu3DKpVZf9sSNMD6Mnpb7Yvb6TnAnMiApqqd6pdSrRyfHoMVD7RepxGb",
  "key12": "3k94aW1VGuRxDaKdSSVQHV3Sgmz7LaZ1AAt9YZz4UW6CascXoyj183LGuCRg5MJTLobLt6akQENto5VHkEBFA7To",
  "key13": "5UJjp5oq9MVj8chV4fuvsDEZcW5jwayfKfKmTCa1yQ37yf7iDEnohDtnJg77eodnnDrmTfN7BcVciFboEj86azgW",
  "key14": "46NGAeRQLeoAjQ33iZsh2ZjbmsaDwiDpvyhW7hNuFbbBf5JY8qJjfRJRJCkv3bbWNzzQdUWnqCiXtrpb1sq3wF3B",
  "key15": "2BwtYK5cFoJHTcaUNfrXJYmpGMDE5X5NRXGaUXai9EjyEaHxHcicv3bJgcjsBoGFesFgrbRc6nVjuTTXKJ1qomR3",
  "key16": "4RBeRZD5m7xPyZwg4SbFrFPF7pBg5Bn1ytkqwTb9QDtvfLJwRH8aQD1Qpszab3Y89q2NVQ5suxV8hRU61BbgJSKt",
  "key17": "RoJJ1xgzcNcaxjMu9pfMZ6HLs5FqjGuuzRenthmXBqsCMokeAV7mmMtemNPq1ufJpeEYCnSbrqJwxS7fPC7MDPN",
  "key18": "5ZsSxz2sNYAEcuMVNxAfLskqDLzCCBMG3zhUkPozZzpyRVFNikL6jw8QiUP1Qk5nqQhXZ7WqDcZVuMB2S93XpgPs",
  "key19": "bERzaBzqwUTj887vXUgS4u5Y926jkCjFkiKQVF8aJrENdGqq7yfpawe8ckFTfWmuY8tAAb6X1XnRZETPQmnxhAL",
  "key20": "52j1hAUBJD18SMazEwxmVUuki3PexKpKBYSCSfzaaDaRWram13XS8S97Mt4XyNqTabusWdU2Pb8dRx2RUwYEi2Dq",
  "key21": "4da16dAWWHi6Qa1ybVsGq1moM5pWVJotXgsRyxHBGwsw7ov7WdnVTeUxWMTYeeAp5B7gRWGxc4prnRGnJs7FhBNL",
  "key22": "5nmksMk6D5a6VuKe1X1CafKZWDS2X6jwjBmVBD3ALsyV3WALCrqm8mPYV44yn3mP1wHxkMVrq7ydTN9FrqwQNKQh",
  "key23": "2C5RPdj7DgNXFzbuWNdZxNNGNHRJWccMJsnP5N7R2Rq9VZtNSzmnJCWVWhT8pdVqE5Nekws8AEkZRADRVuqfjp3y",
  "key24": "5foCmgoTze9wwj2FVqiPaEuLGf4pt4q4qt52SDTEeGytN5ew3H1VCgGqNTGrPDz5d9CqwXHRWDQYiHAnnVkmX2v3",
  "key25": "2Bh7XZFcYSW5ChCkQQicxGVmixJte1CtCXrYAGRwjs5KS1GG764P4zaMijypm9dEmFpnJ9jzEP4k6q9eDhLLTa89",
  "key26": "jHsmmU9e1YPaxwKaZpPivNCNoHiqnHa2mfchTSD7HP81Ajo6swtEaQWspH4Mhk5eCPYowyg7JGNmQ5ZEmpwY64o",
  "key27": "4rrUusovAekgEB5cknmP81KeFHFEX5ciGqBojia59kkBzkbBqu15YHzf9n3HR3CvtncdQMQT4Ffys6BJ8hcB4ERj",
  "key28": "4EQVx4hapJ3rv23973yzPSeJvu1zL7CPSiu5MMtF1w6evWssAVrGji4kvvgMJdzpAg9TKozKk8MxwYzuRppbB7M7",
  "key29": "9Zu6UzTKRYug8axxtNeeyuDYEDZaZrySgURjppd37ex85dnW3NrTEu5W29VxgJ67FS3cDuAHbCBYjTCMFxCrgQ6",
  "key30": "98z3Tsr15txFbSpvNuRaoJFe8dzGGYWK2UexHF5qbL7XWVZ8Rj5BVU3ytwp7EMcC9Mh3W8ikSVzhaj3jpkVmNYV",
  "key31": "3TfJyb88RjJUjQeBUhRN54MBhYsDKTckBtgegktL9VVr6iem46B6HxmPge7XEhSu6s5YPeysXzGyCsdshPZfhGB1",
  "key32": "5zMgz1ZTg1kKYirYUQfgRBX39ctHzgKZnf1VifhvLM7iePtcKyAeiLppAdeCRsH8aW92EqNdWMGxgfrdqxTnr5ga",
  "key33": "5Z11u8pXAehuhYt9HaYVNmVX8BBEq4CKFhcWkoggbhoiXJe7gRnZWF7txpkNDkLeY2qr7eTmLvNDnQZcLgihRcNo",
  "key34": "5rP8Vah6XAQDphkoettxnchs9rgegxCqgo7hSPGjbq2ZNZevALrSyNrsbcPr3D2NjunckqsLBDCJCfrEzYdcPMLL"
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
