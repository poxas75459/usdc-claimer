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
    "5bVLRRWGBBdzCFx7upb4yKJUpCJEx8x7ow9Zh2F4Th9zUtKukdA84v2TUwUvCF2YbWU5h5dyA4mLTdcjMGvRYNsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oheJKXJpm7dDQKY657Z4TxbksQJnpeonpHd3jobFxrPTTHyZLYZ3NRpHYWbg1QuCBprwKHhhbx5wdYsjjDVTB1m",
  "key1": "3htPRU5bDkHmJk2W26v3MFDMAvjKURBmRGkpKkqE6YJUhcy3cHqV6ScLg1DYcg79KbscCX2pEJhtQnvUYk4W312F",
  "key2": "3tGcqbcKSkteLS9iNBwG9ReqJXb3r1xr4om8Em75kJ6yBWFAeDz2B4K7Cb93W4oSCsudUAbz5YwSufu4aDjDapBG",
  "key3": "2egW7CnX1FPZPWG8JY4FXKhL3jtxDxbVkUrHSwMbLyovDd363Ew4HkpWk43dCiLm1rEFccWpDUbiqBixZA288Tw9",
  "key4": "2ydhyvCS7pBdNmkASeueg1UBKLNGb2cXdMHJyV9JvSE85AzCPje8hLDP4GbW7zNodm77nqYiyofyQ8FpFSiXJ2nc",
  "key5": "3QsFyDXQ91t52q8zn8EJpaA4hpvQmtgsa922USxESUzwG6yt5UkVuntZdu6WcB92MQHrqq4mZxsfTsWgkYgCBsD7",
  "key6": "3bMmX8PABng77Y1KA8TzavCUmH499RpvPQjmfenmrnM1ZHuKvnXebsViM3EAWSFHeXhoPu63EWJqf3fNEvWQQ5mK",
  "key7": "3ekyFqmR8tArSNtUVUsgcScRS8oMDUcajPtoXbbmRZZnJE3hoJgYFvoXRSnG4uqyxqjyG2MUDVkZrYrCSzrLyvZ4",
  "key8": "4hYnKbsX4t2HbktMjzoMRGhEWuHzYww7NonzEQTmCvG4fuEfUs8KRdQtKQj91ddfqaNGdvcfAyYYdc4YJmtUttku",
  "key9": "3cC1aUeAmE4gxktdb8dnB6GdQyzw8Mu27zBPMEQdY4NxM5qMGobR3opm45jKCuUtUcQqcFMWpsXQCFkBpDBacCy3",
  "key10": "4B8obYM1svuRjKcAGsErmq22XSpxsEiGr8tipA5QM2XQkTQtdfmUUcLSJpsZrv1DhQKGjDhu39kpYJA27Qg9ni9V",
  "key11": "21FucMgNt5vy3L3CV2XK8s3ZR1jLkEbAcpAbjo22PSoJgLijxUHEtZaXo5EVuDWFYBHEihrNBnWrnLrZyVEYa2LP",
  "key12": "5d5QPTkPq8E1DtpxthJvRzArjfjabS91JPBdhwJfHi1J2a94fjKvNdvis4R5o8iy35Ur7Du5YP7P29AgWHiU2Xx1",
  "key13": "3naNH79QhjsaA9nTi3jHCmhdufbwBz5jS2HkXhWxDFQBPiX9zrFXZwk36FuNNJPZBzQeZRbgXuszadsuajn4LBqZ",
  "key14": "28UXDyVFKTZxnT6xas1FV781nPfDLrvacz7TUCCfTgx5h3ry82WzQyACmKaf66oxMXxu9pybrgaW3JXVHjq4i2S5",
  "key15": "65V85drfZW5oXxAj3zVCC8iFHFCuioMvMhovVXpwpWsNpvJZ4ubniEfvb8NBziGJWonQiXZtqasE7AzbVNmyZ47H",
  "key16": "4BN8vkxWcduu6r6uJnqSmVVjQvmbi1sziVv9S1BuzcxobD6DL3yE5Lq8XwXXyUpPQjKQGSjaQqCn4baRYVzUgVuQ",
  "key17": "7jYXV3qFPVqov5y4Tqrp2nQWBezeNcLqB7EHBHwxBC3xRtf44xmfcyv2vbpQ2RcF2yYd8eV36RwstTFouGj4NSw",
  "key18": "32ifTWQcwrwHhxGQNghn4GcKdvLqb552Ts6efNaTmAjdSRTAEX8daE2T3cnWtWpHv9gJEyyFb6fGgabrwJEvzKpk",
  "key19": "LLbYxLJzvwgUKdgwUbJsJppzeQNhQZk17UpwyAGVEsbvA75uX2amh13B4iTGspfwsHzacKfue8BfM6rUbj6S3iZ",
  "key20": "2PtyA9b7CBoS64ULKCdNV2zyW861NEPDaP1eY3m6q2shQQsnxmW9kXTTeHTtaBeUAF6gpnWZ7KgfyxTVRy43Jjst",
  "key21": "YFXbc7GTpmiP73tNAemQEgQz4Y8iAmkjqArQ7zYeEfvs5WDHveoXBbWBWDLnHHegNHGi7wXv5VJfq7iTyUL8Xxy",
  "key22": "5gtxyEWHLzA5UfQ7LtkMnH1L4Th3AvSw17HnCAwNWCHRfPh4vxpEPNUYW1YtdPUWEwiEepDSkDRwUBhgWvdw89vj",
  "key23": "5JuD1G3scYUpJBQRWsscjziiezHXoHtjmSZSw4BaLbUjLMU3JPqqSGWvfL7yxxwN6DtbpDEmWwRrkH7xnNNCwPHs",
  "key24": "fBYormtLwCt3QRz4c23Aw3n1kHd1KU1VrALf4ZUYZAtC45QcztnMddhbQfoy5CJhvJFJ66GHy2g8B2DDDDps3bP",
  "key25": "3ELXL26DFxTsjbodMWsjmdq6HPsmUiA176KctpJu9uKoip5j2VtxYmCbZeW8JzoHfQX81FGekdfyrHccm5eN3snJ",
  "key26": "2gbFcFPnADBLv1bU7QiFwAmWrkuK2Bhz2gM66QR4GGkDvoGpaJ2EiegFDQJQzLdRsXnFouSknryqh58bmNjNouwB"
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
