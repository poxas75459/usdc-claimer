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
    "51PVHjnza1jjJgvhuwSAkSEVuLuYKJkPX1D6PgFTTt4KSG7RMybDyELrA9bPQz7768FppNL3uipcfAKnQWamnQRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F3QKyMwCqJjHm7qW1ZFKDqWYPuz9UPF6rusnG43JBscHAkCGcdXrQZhm4jzyq6woLh4DaUEoKta24ddMRRSVRPg",
  "key1": "4moiKsCPQpoV7ZB6SLQ3zfSZmd4ygtfCJqz9N9WX3vDge8fuXYrLLbFFTJAQXXUiJbY8uYjDZ3dN9VZ9rzmuvo11",
  "key2": "2pbszLbNCHHRQ5yJk6wHha7SUyahNf9G6v7VVygZYWM3RiuYkpvZHgobUH4Kys1nYRueru4TyKewn9tYScixqC6Z",
  "key3": "3mNvaFPR9cXjw99hN7jv39oP1mP8LLuy8b9wMZXxC8kp56MUWnN8wnSGJCDUz7Sz6BD6TzsTRVqmtwcMUMrQv4jZ",
  "key4": "4R6FB5uW3aY3cccyJmBsgXZKE71jDq9kyiLu6TneCevDuFbCdpXPey11uzDJG4HFZPusVxbv2ah9KC9mdEAhNd9C",
  "key5": "2oDBso5ukpbsPfJLehYf9NsTwMfiJgVAdXBvt3Vmgv4GyV3GSdGYUu73txBv2myr7h37ZLwgqrRPBGcDHfW2Tc5G",
  "key6": "48mSAVBipCrKg2pCNuBFQcF5LdoMsdDpvn3mRoqCeQ3UqgfbvLh7YGFv7CMfEnJLCuWLmZKzSVbRFFnzJVRgMh4Q",
  "key7": "dFjzrnW4yfQ4dQyCLJJjCrSsZhxcHPyqjqbnveaCu6dQLdDXYtf4Nraj7fkEtMpGcrB9iMrNnUrZV2Dti2HQqkT",
  "key8": "3Q2oQ4L2oWtgQ9AKTGBHhDxuV5hinXsSKhge67ZC9NVPtFVsByRLeYLdTPH8wDhQ9kn8MjhHnykWzrPXoCxTuLGG",
  "key9": "2u8TRWFu1XvydK87wx7sKfAK3umq3khmWzah359KSJfy6Bho9YZhCemoKbeKuJdqoT9VWD9r2gpsQvK3iaa1UY29",
  "key10": "disEhXVqBFADWFHaB9jvWba3T5bzpMahXGwvSXFpeJBXvCay5iv9mTXWazJXbfxAPuDuY2W7Y9itSkBgsMUZ1Gs",
  "key11": "3MXxi9ioepmMEsGwecHFk2rtmgwZ1RUZKEm2t9Ja6inZRo6GVULGyPq4txkRpCRCYHSfHN9KDvhjcXbbhvPVWaHX",
  "key12": "3uT6AQHBtn1K6ZTkgtRxdqv44i3NSNtxAyFkgKPp94EoGsfd2ENbGpwK8PBKXPAHKAU6TSc4LupCanD2wkDjK9No",
  "key13": "5sizG1DnRNrzBasnLYY7AjRhY3V5Ga38eDUJ8AnafCUodTiyTWuAjQGBZUigFmwMcZKRcqGzRVGrw5NAbxe5xK3t",
  "key14": "4EWoBRLaDUr761o17tmjX4Pqe86TvG4zmZw6tGypXCLSySxohgi1rdEDCpRnFanNvNecfpdUhx3soHJSKiT4zuQS",
  "key15": "9JMpghSPsc1yJMJ116rgRfKeM4Ed9SqRzp988imhUdQANdY9CGVVgDTsVzaTKG6haQVU5d1tvumRG1ymFN1RctQ",
  "key16": "iXsihgDaaFYj6m8k2gVEwPAV88Z12q6WM2AnaP49s4GV6XykMfWdi77mcpw5ZwrV28agM98QGD9uDH39orXFkvN",
  "key17": "51CQUvAw5mpXn29zxhqspGjNJoBCJgLgChRtYhq43XU9P99JdQh9YfP3qXdgzqzu4L3uy5xgsYNa7rwWwuZwtxE1",
  "key18": "5g3msugiaVBSQXTdU7TccymxyuMJgqnBVDiLSZndcomgH87Svs6FQLcdk6yHt8gxvy8M7jW7C1oQdep1aux68JN3",
  "key19": "4KKeG3bBTY4NS7c3VVKVWCH1xvfPm9JuFrhi63DWcC9bP3yHZFZoXu5G8HUM12h7DAuRuHzepaHk4UdZGr2x31Kw",
  "key20": "2epz5QqzBCi16EEnpo5MKW9hhwQDvmPjDn7T2nhy5go7HFuExFa4YXy7h5Etbv9nU6FmtLiSWs4WUVQHRmMHx2Xw",
  "key21": "33BejtCuZtcuYNEs3CBLV2VvHcsq58rsa2tapQ5MunNbKDEvHMvnXb21tqwdV9r23D2FUhXGyazSRvDkwVrXU4cc",
  "key22": "3AhbaHHpHiSWjrrcYSfFxZciGEaj9fyk9qKZ6N9uGMkcEE7DRvnWiboacCmrWUhuM8EJ65HZ7X6nUSAKJt32BFz3",
  "key23": "2xsH1s4pmVwCMZShgQ5CDwEmsRgnmEVmAXPSqBLFxG9uaZX8ovMW68HnynB1G8y2bSB782TKtzr44iBmyiYbrYNZ",
  "key24": "2zMyYXCAmHcJw4jebxZLvNdPU2QixSHVt2KKKYprt2r5WcgNYRqscRbxFkP5ucJJrtTUv5YC79CuE7jS1aDt3udm",
  "key25": "KNfob3p6sPQLADNtP9ZCPTs5hUPPR64K13WncJMjREiK2PgEDqiTc4WJYpgnGSvPiWD2xNas82aVfsnMNnWsL7x"
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
