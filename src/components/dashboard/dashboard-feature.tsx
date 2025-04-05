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
    "VyiEeufs7eKzGguaf2Qkqr4qNpGkdgjJEgQf7kxxJ7HSpq1FmEGF7VgjWXePTpLy12XPMQWBWTrHKWKEzLUco6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPPV71YY7fTtJteVzw4TJ1MT9mRcBzmnHAFSKLGXZwZgdpq5csE4VxnDiRkngP7S3yiN5AgxZEHZ8dhN7bweKcf",
  "key1": "56GK5h92ZFxvLP1sVGBhV6sgKbSd3jtqsU4MAkXgYgW56dRh8V2fjqU44RBYZjNwnXcgas39jrvefdkhFkUik8h1",
  "key2": "55UAmynZADzQQbJDDmNmaReXUFyhnas1UKnmHGWRLhczLSzrFqBPKsHLnAMs4TqS6CCFsZ4rURkFGiaH7aJmobB7",
  "key3": "TnksAvMroS19BFvz97o3Q8kCrry6RmJV3EmvEVtJpvQSuSFFgAWWHp7Ptyt2izQC3Kp44KtKgV3k6Fp3WPmbJaQ",
  "key4": "2JeoqZLho6QsdYYDumAFtBv9R1YUSGYbhEfsANpvtNDpQRrisn7enExDkYoo5bGnFiYidGt8MfGEQj2YrPTfXEst",
  "key5": "2aL7x5fh1kXZA1UY2FEL26YxBr5mcQMc6HpNLMbFTTswPiU4wg4Q8rf58XDBEXmzMzryvSSnDhfVPcUnYJ1rHFPp",
  "key6": "4eSxLUsyJYm6eATtaufNrRyQnPtymmNvZafWMQT2f5oUA1P4cFxnxFeC3itdUin13FkwYF3nEgdUt5MTzRw4yiz",
  "key7": "2dUG5qQN1z23Ep3bou4EuQrU5NekoZ9NAUoBVkdACiqHz6DD33DVwTsp1E2zUxLSiW9P3er9KEHbGV4zyn5XfETX",
  "key8": "6UznL4egQNaKyhmceVGfSXPBUuUmmzGhKP8aUjQduPAdRdBbCBbXG3zscmRx18NWtpoVFsQWFjbeZMxuTizWyje",
  "key9": "5kEkajCHZSEjMBPmtM1ANsHuDQ2AazCAF1JcXj3pGxmqfswRZvmCLuqAmvQkhTRszXrhytbAeaM2iZ55iPfaHrhd",
  "key10": "2vMNFETGE5t62MZCQ6DCXRFbdcgyswqSB59HackYFHmRRwp8mqFXBnNEPfTrTAa4xMWbg4j4R7GSrF1R2SCDQRtf",
  "key11": "AJFggGYMhSN61jqt9nDED5K17fkY85DMzEUGaxDk3wY2mukvGwtfEzi9fQxyP6VFFzrPtLn3SUoaoUMxeCZWnC1",
  "key12": "kr8ThvtZxYmxpx3fvh3Pv9eUdYYFeMAo5vveDAidbC1Dt5dTWejriSswqioQgKQGCHCCyLfKtwryC9mPtzYhMWz",
  "key13": "26qyxv9VBgq1nuXn47rGiqjVeEQJfYMWRkp4L1cytXY6RaLDJpDmx299HnJP1NpvjGCdqt7FR3FSLbH6zJ8vrNUE",
  "key14": "45cSTnuY8xkE3y15oLFJQqNr1isT9d8epPGLeU3pkmvRFXjKWxxPFTHZ6zZ99yi6tj8c1gP2hHktisyhvHSZsjAs",
  "key15": "49o21q3S3bA1vpAb3mPWhbADjhBHaqSC32X4DTEqWaTGM91cWKLRMuEhU2fRZAWfXzNNZZeB3kR4rZcpPGFcZveS",
  "key16": "35kNEHwAc5kDS1oj16TFj9NdMefCVvZMrb9Uers7ikxqJ9N4ooADRPcUBBbfAmZLkHRUnPLV6ywPNMkiwrBp5pAd",
  "key17": "46k8YNBSejv1cXTCZRDgSVLiZp3PFPxcw5gebiHxqsoJWKsV4RB5ZDyEZfG18XFrSeXu5qi5azvSBJvJY7tHtYSQ",
  "key18": "2BF8CAhEvgiXsaBZS6LNfur5eGz2GkcozLDHnEDwUKwHH38rCFCkiJQPTD7p2CHHZBaLgVGg3at43GTTRJjwVspn",
  "key19": "yUA3ChEuTuSHuCAbh2DkB49Qt2fUoi4zmzQPc5p94SVKpX7Sr7mRhXyPLZBbsYFmDJrsE8uAooCsBQWTgBH9RLC",
  "key20": "2t1YBc2G8cCzfzHyirN8uyGWh2VAgKyVY2aTdQCDQzGa1RyfC5KSZXKXAB7qunpVcQMbrPw9GLpZNA3k5z1KkAFk",
  "key21": "5uqdfvraSMcQDQz5z1K6zKbCY1VRL3ynpPNwCJBmJSXTisv9jV1j7VMecjMh9wCPxgdPq92sVXwhYPXK2dDT7aUP",
  "key22": "2sT4Tid92xuvN78HiyQTpLDbEtg4xxJY7FCY3hvu5nN56u3FNZ7oXFoJRxqhj9uvvgAtTTq4HvRcjwBjBm7DcjDL",
  "key23": "4DLpggKECnNyxbVGgk5jQ7DUYZ6JAdvTctFXwo1kTEwmPHZcQLLwUrTLehic44Xq9463vJx6tx7aKwecBDtpLgfM",
  "key24": "5ghUcy7BpJmxA3YCEAbQk9iNW7v9JJUz1fPooFGnrZMhmmACahys9ic94aWj8JLE5GCMYz3eYvapAqY4E8KVMWHe",
  "key25": "S3UcF4csx1WyHLWuJSwakeUDF3vXSc3MQL9giFaboWgLNfyQNrDhdY3EJAYU5QaaTRX2eQmUeSTox7ifAcSZY5h",
  "key26": "3iwAV6E2dDFb1D8kx1u9iDp3oPZ6r9kC2v1tWKb7zrcFQpCM5jp73J1zDJoYxtxyUUZztCxqgNczvk5zkVaEYdGy",
  "key27": "5KQesdZdwgzGuocyf2W5rzWKu79KBaUDKxNKMDcwjjiU5KCGzw4yrYsyqYLoo6xV7nhAf7ev2w6fu29MeW4ixBwP"
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
