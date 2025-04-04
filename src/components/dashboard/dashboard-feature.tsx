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
    "4VfzWf8fG1ESb1MmdgGiqAzv14nvto7WPUo7niCVEaf2yKf7mYjCkHC3mct65VdkPMgyyBWsdTAYJmu4VwArPcfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tgyknNELGG3TfP26BZ9aFdkutG7RtdCJ5q57zkbjUH99cagcWmc9G8fHKL4FZwnh7acHAgXaNy48DxLSuwveTfK",
  "key1": "2SEz1ZSVaTwnA46pxNYUqrsJSaPihctC66t4998ABvTqKNBJq9fAVG9zcrUeAHQFbFLZMiXHM64K6qsLTyhJ5m3a",
  "key2": "25yX28eR1CGFjo7EbQ8QJP6ecvvNJqVANf77Tu3uP12DaEXDmAdi4h6qcraYNaGCcFCsJV5kb6HBohQwESv4QZ92",
  "key3": "5wDpdcoQkRYetvhuyD7hvqvihhVMMKsXcqSHdAukZCtCLVVZirX6tL65MZ4nWYipWvMtvLNtcwgR9kFcdmg5xfBM",
  "key4": "5cw7c6z4so7kfDx9H6UhbJYUKu6getUCoYgcKj82em5jUNLHjGwnzHS4wpQEr4w8m479pwKDQze1KmWz5nZ3kD6p",
  "key5": "39aRDPC86bpS7uRu7kv67SssA39z72ML88YmEPbLHAKGcy2uL528dH6uLe7oL4DuZu2PzzeH75nXeFcFCzk9qLff",
  "key6": "5gP16tEpiSo8q1Pu7rAAq4ha2Xxh735yXvHdbmcu8qC2ZKwApbUgnW1ttNRMx3v4RZVPDdY4EGk9kD6qu7gpz7x4",
  "key7": "JPBWiSANibMimSMekpxv96SoAVsPmoHp656eEVRoyhLgYWxhW5izeNrFWFTSYHEUtYdNQ8GnHnav68yhK1Dj5PG",
  "key8": "4v9iyzr7HyMtjzSFKVSEHtkRju6CP1jsbPGcuvs18tBGyKbxYFpstJr6zhxeadZycM2SGLckxKuDFxMGXVCppqdh",
  "key9": "33eSsVCUS94dxxyChhqasZH5Qpwkz7wLmhGDNAKiWBEcSAMqvhaevgDN4mKooH6ybeAhpMcHK7z2bG9oN6nHHrEv",
  "key10": "4cWjZrBr9XbFkhMDGqbnG69gQXWFcuzeoQMajTvzPaCU4tbkuMTgCzaJnqAuvhhYxZBnXwV5WWv1KA1seAobSPQY",
  "key11": "31nnDg4sHv7K7VPwv4wDrEYVxrqjyNV6RCSmBoQYRSx9aoNoiqeEtgTLudwnTEaaWG8DHjhqSQYmY5RvxkyJL465",
  "key12": "5tighXitXSpQeLY5G6So93LBc9tAMCguZXTqyE6smLVh4SC3PkyPAVbyFhtgbELNZmGP48kL1Hm5thTGPKqfhbsD",
  "key13": "4MHUrmpNyANGTKa3wTa77uyKhBYKGpbLu9ENcQxS5wA7KffV1SAAYj6mLnMhik8c2xcx6SMxPRNgDcX8HvihcuqF",
  "key14": "2AfcEQFgwcPVxoBQJkdzBx95rgnR4nFY8bwrGe868edM55ynfNfoFTjf1VhqasopSdmEFTTsGVobA3kRjEx5m5kP",
  "key15": "wuZocoBxZ9yXyGMjbdHioqccyAarXin4hgTHbzWiQvTVtiLq3atFpnwxSie94gbcHv8u7TbV8fi2UBWmymhrZ5w",
  "key16": "PS8Lzhja26Ey2VMdzsD1i5ftBnN5cahNkoqUBn7akSBDGigRJKnscCJyciPmkYeYXGnLXtx6kvZfyUeJNsgCcjJ",
  "key17": "5tkxuWHnixaCiycmQt1bQrBHPnpgr6FktWS54tNUkXCEnzr9FX2cfiG8a9gEoiaKivJTQgi7Jv7JUbiFaSn6Ecwy",
  "key18": "3RFrnobUeak7mGZ887xZ6SotZy56WDoj6XXRMZX33wyEcHEhk62JDFnAeT2DwUufwonhfjanrj9V5a95dSwWman3",
  "key19": "4vnuVi41LDHPPEs9FdBgjd422m43t2svaMoSP5bHwndvMAa658BCxvjZEaBLMEVv4xDkP7hFefE7aWYPwadM3VoH",
  "key20": "4uS6phJ5EMxpvXBcgU84qfntC3yhRyMF35fUGXM2oXJ7w2Hqewc8oRpga5Ru2anStwYVdWbKK74APvhzMNNJchR8",
  "key21": "6T33tjXgSfhsr46UbMSdQcFkY9gZZ1e6TqbPuwoiQNZfwFBd9nKd9hrGFfEtUNRPRp1t5e8M4ZDPmkQJcqikGbj",
  "key22": "5KjhbkiQvnUu7YA56ApQ3K4gV3gH24tWbPAkZAvAe1NersDvpWW7uxeA1tSrw5pbMHwyVTu3q3FkxPx2NdxVdgkA",
  "key23": "2Y9sVdyqaCB1VCC8y3cRvUYafx5SxrcCfZn6ttKJh9QGQ5Y4p669xx5LPW5whJ2vCCQXGFcXXUydSyqpmd8BPfcz",
  "key24": "5y8fxGyf6moiNKSsqBh9A9SFfTRdQAYmPinCoLJ59sryJy81Aih1vkqdvN4rhabLGLxGaX19DRM93b8NVhCoMNbz",
  "key25": "3sqvuttjyFuVTdxtH6Sb2QsvX4qv22ZDrd6m3dKYGTfCWV7AjpXaz7UaaMQ6c2iEhi1RuFcXJGdumWw7xJbCpxaC",
  "key26": "121W4KytZTg8LFdnWLnGuFPke3tQ9nthj8dFHdhtAYJwW5e8NtogmsDvsuoQPHs1aD6AcTYowVynMyfs4ra4Kmh2",
  "key27": "3fATe2qHzqQYhBQ5sUSLrq2efZEwEyxALNHCkF6MsEQqxkqriTx5ybmyeGuLotaW4KKkErTi8vSXfaMLCF1UEzJ4",
  "key28": "5yy2rVHUZKgBBneSGmHqNywLTeyEvtjykEM3gLNqRNNstNqJNmrpT9GfjNURrBQEv47oz5rMgpQMSqEuoX5PiSza",
  "key29": "2sM1yyjuWG39AgPu85LYcsCCmd263KXzZ6R4ozYu7J3Ry2Y5tGuvBRBRZEX3zqeX6wQ51UEX2GFanis9tFDj5CdK",
  "key30": "4FsxnYV624rsvp3FQ6ySsCRGwFaqTeM5taxf8mTwoSRJY8Z4sfnQutsukxzmUm34rLZ5LZ7BdWLcePZtxHNGmoz3"
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
