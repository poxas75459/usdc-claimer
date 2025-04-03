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
    "2TZLiSzw7taoew2XjBdTXrfGLufoWVdV6abmrcc5TAU9pHAuh38QrbW7Ej31Q34jrJ4UtHJ9brLe96EMNRFgdRR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cw1CM4C1qNuZfiXXy4TWkF3knrpnZYxfkLsY6H1cz1o1gpPXUdD7vDcEjGqFBAepYxaovZNDiRu2ttF2L43gr5P",
  "key1": "3BP2xt5KMs12Gnz9Yp16Fp9AY3fY56HUyDqAtezkED15mVLVbA1BHU37yrmr8AQjWiRa4ZmVw2AiAKDa6hUWozAe",
  "key2": "59wEavkBSjJf5c73xgAGnrPd2Bx9nRpFsLnjXUY7W945XGeQwSBHB452fDJQ1mp7H5iQxvPR1N13VxLRPz5VQF4i",
  "key3": "2apMEQEHZ59oZpDSV2KhKjtU5bFDzpNuk57mfEAWmjLT7SBYXMxenJgj992wue7qZx5XHu8ep8VKBaMLrTs1gT3E",
  "key4": "4aAcSyxHBCTCG3fBjW3DBQ5U5qGZaemFGuMTQCJdLDXtyNmozkgDgquRXyEFu9j3PdcN9Gh7ameVdy1KAGM2urT3",
  "key5": "2dETKPib5VrnFdm5XyjmLTvcJa8wSsb8fJvP5eGC6RENaQBKL8CKzszGPG2JCAJbTz3nN7T9AoaXi5A1W17KZQWs",
  "key6": "2qpaTiun4ZiFdy37ukMyB6HefShj1JJiQKjnsiSeLamPAZ84LowJvp3tpL1wGi5gu1Wac6jJktArcuaNnW86DyYW",
  "key7": "4PeuCjShopkii2XygNmJZraMwmQscPG8KKLKTbyByKkNXKtCvYsXLg4R4QGuuAUKnRnFcVisamBvwvFhmXAdcbxM",
  "key8": "3RDJUAAuZq3UETkZqT5cYWKTXq7ZSQ9YnJJZWQbWfPgX1sS3h7G9CYeYaMHV26PaRhut8ME5iW3zd6j9xXnZDPLU",
  "key9": "3u7c521ndvT81Jco4Tt7fSkqsBfgBJjEnLHzyd3f2aNNMD9aQmta9LdNHrD2qT9VycWeuW7BS4qLzaHA8tSRGgN2",
  "key10": "2x1CbPfaVU4TStkecnJbuc2vbCAxVWXHEbAstDRnybp4jYZNBPhx1j13torxiTWbgdEiGg53NLXEqDd5t2nhpzAV",
  "key11": "YprVQ6RhNihGM1hcyXmty8qCtmbtcWB2R3nC6vz7u7EZoBKvraYxk1PoLwmBB5NJSDFzkVFKCNks625AJH84166",
  "key12": "DWbfVWyXwVD7eFUk37zLCj3ju7FxgigbgjCtNywUb69dcRJ2Ax4FD4TqNudXhjVzY56qguYVnmbogjX386kJvhz",
  "key13": "2GbHsbze5DSycfKm1Kb2DUx7DvDpm6q4WmCaXwW2cwsmSAbcS7PhzatraNA35PzjDHpUDqwGenRgV2Zn83VWRUCt",
  "key14": "3XdfNuQ5jtMJb5UXQFdGgsMSMNkJDSQRWVKgX1AoHMZq8Pqm9hQ4bewiWNPoHtwNoJMchMoUYcMtEUnT39ksovWQ",
  "key15": "2LZLqhYimPD24ZhEfx792YZAGuPKEF8X5jNnQdJFHt542ooQu3XjHxcVGJxjSRGifx6DkaDvLk7ki9Udt1TY5h9W",
  "key16": "3EVUKzs4JMvMcdFr1jfyB74UKsk4tWiPDjA2HW4cusPixt4zrrXdMRfU5kSrC6MEW9AipvZQpdn197qxmntC55g9",
  "key17": "57MEEqdZKRrTc6emZr48SY5ADJ6TTjuucSLmVHfUKP5ePVDDghT1Vz64JjVCRWR9S8HCGGHDjXtZ8tdsgQDmqwMK",
  "key18": "NEvdr13HWtDDkJDjA1NnQbFixiEXrTrGXtRH7sbwjjPpxvQzf7MWM2mCcx2RfXC7mGWugR8jvQYuhrwNRhMDaJJ",
  "key19": "2qcKT5WTGpcCRmnv9e28VWatEfw8HhQWiEFYYxVkGv2h4AnpMDn867YtXvTgfSfBASvKThnnpa6qLVeie5fd1eyh",
  "key20": "5Wv3aJGTwrViobyCFSNYxK6oxL4QCKGZMPZM6KEXphG7zqWjmBXvwPRifLviMSViwbR8HSnAnYsuHhZSiXFT8Pav",
  "key21": "53Y7YWtBLeN3r1mBVj3z7erhoqZ9dueNRUSvrgAQqyyrpEbnyti74iTnFqJJovn7ahkYwFhzokQ6HeMbtdAFazTX",
  "key22": "3DrENZN5j2TuZgAVAy3Uigebtn9QW33seT7gLH3DJvUac8X4J422yzMH5QANJSmGXGt2oLf7VWG3peSm42uGvmMY",
  "key23": "xZ1LDCHNRhbWs54DgM5W8bLPMXDn3TPRYqRaaS7cmKBug8Xtk4HDidQoUXEgR1X9fCsXLiHrzmhrDAnAsaCFtND",
  "key24": "56ELV7JvKSPRL49Dnpkw7NLpJ64zs2pSyEkqNd73ThStWQp77LWFE7epfihRxWpzxrnXwmG9S2m9Lk5qGKLQ5BTZ",
  "key25": "5Cvc76JUUGANy1hR7QoaQ3pHaJPmAqqS9cFnFKN3CCq72T6sJaJvRVHGtUVtADdMV7mahPm1kKTZiKGBHBWJFfns",
  "key26": "uY1Du4Fff2zsiKvEbWpExDA25kBGNsrC9pnG2iDxzP28w1txahaY4ctYStjth4gK1yYgr6yz7L6FJ6dqThspDcT"
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
