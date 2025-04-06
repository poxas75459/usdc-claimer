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
    "37fVSfQC5AdAgksVi6LfhsM5diuKJAyqMQJDioFHv3KffvmfRXZohD3fMvUYop4H4ZRTQZnMRPo96sJTwe3N6tAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dmg1Pd7iHE1VsTHJeFTLoTBRjHMPxtNzZejwFCmXd9xasMUrTZjXTJfv2MgEcyur1v4g1njb4PTWswt8Y6w3ACn",
  "key1": "51dvNniAK5kzvs7c5SktL7gZJXnQLaTa5zjBCZTQHVhYGP3Ar49UXAVuzo8hR1k7NYx3XfbysUsNKcTbfkQDKymE",
  "key2": "3gXY6qYspME1Zeo1LhDUWmei7EjCMoBWmx3HcBZ4PDgkFz9dpCk6QhkUNqfeRbNLPU5PVA19fHTzxnbgW2kabKtR",
  "key3": "2Yv29SNnMCkTgKcGq2Jbs2L7fhtVCH3CMsGhfVYKfFut4uD2Nimdt27WRcqgfL7K922E52hLxJ9NhS3BUSJcjdpm",
  "key4": "5GfWhDPoji4i9hNYy2fARRdaD7fe2xqAirFMa9ubTkW1v76hJrwrmu34XJu4tjgHBWVGLejYwtnjM4x178DbEyBg",
  "key5": "3sw7BZobjejfkr11d6RE1xGTJCyiHJ67ozaNV6hwvhz3iQ5jjFKuaCZ44oWjkNQL9F7L8QKv9cufNk53JBQcViQ",
  "key6": "5cm5S1NxS5BrAR3JCPr5P3q6qdPbRach4T5GiNzYrteztj3zwriCBWSQdH3MXDSCdsp7y2yoaoHuDobuKWJrji3d",
  "key7": "4rgZFbKN1QCazA7cE9dKjwUiiFM5jao5LKat9G6A5MZdtfSdtjiSVVqwcTRBs7Eds2V68MCGRW1bofypnTFwEMzq",
  "key8": "4DtrfhRCpdYAqZdrYrZBQVcWYzedKZPbvgibMe9JCcGhtNhp2HYXbzjDt8S1Rz37wd37nGy8q63gZVr9fELY76Ha",
  "key9": "3G4UjqMjKgyW3aStbEnWuHz73vLN6EUSV4VuWJqkQ3zSUz1dPuG1HgdhL8P9HJHGo5f5CNit8MBUYqTf1mvqostQ",
  "key10": "43o65avZcBkBbgk1QBYAy537xJ4DPgiqLiucxQ2QTG5BWUQNga8Cvva7VPwNeER29tWBqFbgpPa6sPp5MiA8NrEJ",
  "key11": "3WojT7grQu2dypm7jCCopEsZpcK2NaAk9y59WwrxFcfLYibJzdzGKEUx1L8FhVGE9HNQXtt7nH7CBS2TTsMuqzNt",
  "key12": "2GBBLZsFKNL6xuECUNkmorP1NA5HrfpBxuiFgWKVDP4sL37sK5Q5V4GQH4X1PbLxD8GLckkrGJ6K43GGFhygZszW",
  "key13": "2u65CRLcKWnJ3PphDXWtc8CHKCpVDYHi2vwJ1w2ZdfUBd7YHPCZuyVfWiTHUMsWdZgvdHVcY7qetVtmAr1W2Uf8a",
  "key14": "3sdWSoY2C3Qu4sPCDVR8L31iVVF48sPGJbmPDiD41dkrCT592RRmEWy2snLWCR2dkrBPHxJSnx6eYuBxTD7p37Df",
  "key15": "5amfx1S7zWWR5BxKRcEkDhhPuqrMXZNswjQAJwFWUwqPkg1MH9ADnMcJmVWEVp6m4CD8Svkig1uiSqL3KUf9UE92",
  "key16": "5ApGcUwLjcSSehgB4daa4so2NgjpWNxLPJPxtnbrPgentGnuuj7eTL9e7TZKZ7sRjruxNLcwRiDumJvcZatcmSjN",
  "key17": "hQnY94MHbncLLfkNXhPXKcZhtAdRKJRDeFs3Uw63UHSy5WEUhAwpLqrjzN9JBnxawjeXZkYMHXzFy7LLDhtz4Vp",
  "key18": "5GVQJsmX7cYDGvnXQmD5jvsciWpvCrFAQAVoeTAP5iwzY51bmFyUf84t6SqtZEGcafgQnHZNmwFSsZi99WEHosDK",
  "key19": "2jieJcFo8XExVQgw223EPUt1MmRxA2jj6pnre8QefGSxAZVyrkJA6MWEgKJfs7sDkdQJzYdoNXeKixwyVy2P57NA",
  "key20": "39j74jMYtwf1MAa46ap2fEQ7sccDij8tavBtA49SgPhos1W9mxi9LQ9e4Ktm9oPrcV9sEdDAtHcxYrtyakC15FLz",
  "key21": "4sZNhbdCkDzQWJWsYzyzu6XCisd2XMqoeEoBtA2vcyNDACbQSWSKFreiviCJczJ7pP9HmTQq24aM9zJJsSsZC7JF",
  "key22": "2S4dFVM5ZpUPn2aG7LSBUUqqxkto7Q6Yf2fgD1czTVPg68zpYiXZh5LHzdrwUKZkXtHyNXkKmsyDCRdMYrGPsov9",
  "key23": "2FNWAv9GwxZHiDoYNR1n3ZmSA6ieQFCGvW3321t9FcWV9ya6faJNYmZdKXRQZjTJ6FskH7mLUFXyJDhFCeCVyyn2",
  "key24": "2bT5jeS7PBi8tdUk5XoM5oTbC6wVbunT2rRsNCAunMneHeLzDuSKrrVoqk2ibuwcJqcDWvsjevoWYNtkYrhHS6MD"
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
