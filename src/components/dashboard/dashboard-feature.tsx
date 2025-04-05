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
    "4Z43FQA86zt3qikPNmav12BcwLvSkpQ92eWq24r6bgJr4dB5DNWVCgNrm7vAFfZp6kHnwHjboC3SWoeg83Rpvejk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AEzsmSW8vCqWnYrAnmyjWNuiJzBZd5PsH7yEwYmdFtYMma8Kv17BV6buFFTF51bZXB64nHWp26Lemt4cDC42cip",
  "key1": "3VQKx6cXrrkouF23Tb5oefC9iCk5sug9DKCUfinfE8BoiEzXgXGYsoL5nQVkra43WKyfa7muDdRPQG8GmrZyR59S",
  "key2": "3PKZcnX8vqFWYt9vkkp6xqjoJnGzJLo5eXDr9cZeBk91RSmc81TN6mbnWxxzpfzu4mvEeRSTWk7CGPwpFeY9vuwL",
  "key3": "3dsew3iKUEUUVtXJph2HkxcsHmyzDnfYFgMnMXLU5FNd6ofaUHXoQZkdNtNcRuobL2vHQKUy6WMZbLoBKyxDsMja",
  "key4": "54XX8GdmfB2V51S7Bx4WUpLtYdtxYks1BYyEL3nyLdhW6xMbZQtgBjP1mQ5rqgxUzUgSW426KJkTHmFohHhpLVAk",
  "key5": "2qjmUFMt9u6QCxMnWktmBTwvefRrpn1DVoxf1PLBuMmp43w2kVvaq3Sg1zDrwcQNRRZMJ8dT1ccev765DYu2LiH6",
  "key6": "554gVJhoebm8g9BKk7M34CvQotmQBgnqxmxK2qeFvyEjEHiYVsZpJe59VZSmstfympsf9aqvb2K86e91HzGuhWfz",
  "key7": "vkEYZpgfz4bHwyeKeY3cSd6jwfXP5o1TEcWYgppV2QCSN3fcnfDG8R5jF6vn5BJVhjNMBo7s7bkBrjs2TRv3nfp",
  "key8": "WkeTmGcwrHs9x2r87dwpgiptm6mAYe5KYmZp4Fu9kj7fycGNseMGdA52dAcfhdWF22KFT4ZpMLCkFoA6wcfZ2P8",
  "key9": "5vHn8s5T2GokyFcddeoXKZxqaH1eRVVonVeCrBPYXF2QRnVFpdgFnEUKRHkhDzpNNoP4vFk8FiMhLMs4JjVC1Yme",
  "key10": "2fmjzkpzTpztpJyE1entEt2BKD2iWnUe4X73gaVonn5PZQAQqCosYWNoYJwWxxyzpeMQTmceN3GhVS7i4z4KYJa",
  "key11": "4MstJNfLpmDK2Jumkj6Np8PrNn6ZH2GoQk6Ue7jhvgtrw2kp6CjR3yBcZgE67rPW4ev5egc4ESCE8Wc4A53iF36A",
  "key12": "4mrSTHLFYM8kQHFuAZWraJJ9mFzKWd479h7BJ7C6DMAZsh5BweiVGEgQACSExNBU2FoBVc2YVDbxf5xwPxgLGvqV",
  "key13": "4DQCvp4QkY1nT3QT2HT6gER7FYJBA3ej7pjeiDCVF2rtB8eNGcKY5wKuAX2j91WSHj9mPQx72rpkKESpKxvUF3ma",
  "key14": "5AFVPhpRqYDHoXs32WQRxj2Bd7UmomCvw5fCd9D3d8DMcjFrTmA6HFU9RJvigQwUMyyA4Wqv4nYdaf2TjQUAoqNc",
  "key15": "JEZDdVQqGSEjapzTSEhndboX4eoMYVURiBCpftAxtwub3WwCoLrBRCRcgdyvu6gCN8gFc4b2vEWyUa6nVtsmzo8",
  "key16": "3WueLAF1RfyVtUQum5XZafjJfcHvuDD1dFMj6rpgEhxHtTmVZ2M7jxTDpsnGnkBozmq2ZPKBR9vZUTf1eVoo5MJ8",
  "key17": "qRSXvzQFqL7RURHLCXdsyLaHyELugfxwJ6L8A4cWZZQ1u1iMv6uyxxvyPaGaZXNTHws8q685D5ZnK1M8S1Nyb5g",
  "key18": "3YxdSreHDvcpQAUNcDZu3hE7KdvQrgh232HRW4H5fYA8WjWquWEvdYjPjwnpn9kvA3D8EjNFJGeSgogMeoE76C2g",
  "key19": "yencdESPct7UL4VWMVEmShBqHJdaijYbJe2NA31LXtx84wsCFzApQq5GVXcsye3ZpnqwrSPTBtM7Xje78R4mw71",
  "key20": "2Dc4LRshPnowWVXKPKPcoo6nDFyKX5MV5kna5shkyurHzi8KmSq3ShGNRnKJCNuuHL98dKPq8ahUAaC7Cq7KaRmb",
  "key21": "64ZSLQ1dthdnnc1h7QVMaCLFPsLD5eBAjgnE1jL5nUmkHSsdPTPXm9GHvf6BsQ2p9HebPwr9gsmtGhYUJpTf6a2z",
  "key22": "44PjThP6JVr6CG7bjeNEgLaf6LtZFCj2m6xV7xc1imCnxTRJVctDhdo1CX8G9xPNPpZBwEUM8J9ZsvBEnqnKc7tM",
  "key23": "4QbGaRp3rqt9KJCsD8F6jKizYtPWEk1dEhty6TnoSBLDiBpw7isiHbAg7zx78vCrvgrty6VZsJYscoDu2rWi3rLN",
  "key24": "tFfNQ9cwW3LFzzLXvB5DFTxu9RekimTRkYvKf9oQcFLXs3etvAu7pkJzxEbMmT6x9E6zaohnR7xX9nbrnsB5G8C",
  "key25": "3iRbR6z5yHLueNYSsAGVQqPNFUQvvHYGVSowaLsekT281zrcBEphYLLPvoMZxxwdAKGNdANpYZwU2JjikRrkXcfA",
  "key26": "8ocooiNQQxEdVGcB91fVtsBSjNdBUAQqYateMmvAYoVTfC2C4QuNfzWQeWqZfdk9xcxGLUqKxePy51F8sUg2fTN",
  "key27": "1eggw9cwh71ytgEmiFWL3ChgfcHnhA43KcJPDExaqCXCuhe8v6wB6vXmzjuQBV9jdM2runwH8Q2B2sSVmvP1UvH",
  "key28": "4tBzrrTiq6hTHULeAqAGZhdAdUGDHFYPPHxqVo91yib172CJsvEfaFDAsZPMHXetXyPMWMox3mHBYnuEGvs88dFy",
  "key29": "2bGgKcBPpVZDDPpgSZAVt7TodYGsFGW8qmQrjDR3cmBeLCCPA7P4pvtR4AAUogCRibTNjNb7TEfQ128EKNrcyVRk"
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
