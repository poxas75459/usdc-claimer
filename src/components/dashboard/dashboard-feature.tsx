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
    "rQLi1VdHKWDrANTevnSh3wTkSRbaUnQwiydTQqEyCdT1Be3cANj9DPmuR4oU8CyLgNEc2qab81iu8avhSx2gEX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SLdqrnEdgYN2VuBYjMMUhbN7ALDR2YgRG5hUdNmL4mMhdzc1LEUzgAkFxGtWn4URQMk8i4eB75C6UZRv7myXFPJ",
  "key1": "3KH5ZSj9AtiBsKG27FmPNFZuYezdknQfqM9KcGEtoA9EcQNHSN6rMNZfZvGQhWxk8Q54iCumRuxmNvPAV8Bzs5PV",
  "key2": "2EKrPDcd9SqqJiREXtnyTcHhWuPpy2Ys9JA7sj4JbGZh5zYaExzYdtg9QdwX74jtAQ6txCYrtrCE7oiEGa2wvkp2",
  "key3": "RHj8SXnmhDJtH1crgqs5Pd2HXLznoGh9XGA48bekqDG3ouVjrrq9zndJ3FNmw5NkAdpDpN4x5E3yWJB9iZ4YwJ6",
  "key4": "3qjYXAAspoxuwnG1WskAhgYJbdJpc9EvtAUA6sFpTmkTxTYp8DV5kTrEgKzbfi3YfcCpGhi5LCzoAjD5sUf9388g",
  "key5": "3AQrZQzkvKNoVt333PaLdqnzLs8EKwm4ihe2qy1z9ta9HL8CLbjdSwACLCsCaVZ37fQwmh3fPgYkoLgsHvqKZ24N",
  "key6": "3TigdftSkVSHghwsDHsVZoUk6jHarsN7xzsw8ACT6EjsB4vgVD5YQuo3Ry3yphmkZYcg9J7WixQ7gV7uWxAu3c9z",
  "key7": "2c9pXzig5AqHN3NZYsa58Unx9h9BcqSMarbgP7BxAnfQe5fTME1so1oRKFPTqxZ9kexsZtNyrrj7xD91QvjyHVez",
  "key8": "HW2KJtYG3AD4xYQctog42F2wE4moeZeaqZcPbgJYmGcxrk2gah8zP7LAKVm7kbTrFkqzmRJWMBpUcvTJApwZTSc",
  "key9": "2Qf71Z5uG5JNnDVx6dbdq8bRRBMsVxK9oTT7XWxLSsWihD2hHh66xLXZtPvkiTXW777q4bH2q8KQXUnSkWNumMjd",
  "key10": "dmnkWUc2teyKLcGV5wRGLLx3wNjDreYWaNvaWkN479vj7By84WGa4ntte7DMy8GhmMvkjcoG37uXCcmEPxywV5Y",
  "key11": "5J6GryYytPtiuBDGBmmPf1B1qFxWH1ZSN9pV4RJ1rP5yeinfcHVrTbaKAPD1nrYwdFPx27A5GcoVtb8Z57g8mqYT",
  "key12": "8araaC4qW64JvU7NSWuttsBGUJsAfaT9PEzGCvut9LXrLeLrNDssXHBDmL6ra3j8Di4hnKYVUYA3ZkdX6U5yMkg",
  "key13": "mKhvsj3G8cLdM8MFWWBVSYfkJeyF2o94Zcw5KpacZagV91i4DxLGwqV2f8c6ELELFeRbQZjarBVbQukR2SUnQqJ",
  "key14": "2GpX9bYMSZ6VXEYtifgqPdUG8iwZW1MBy6bzToQ71tAfRZmMViU4uCKAkdbKnU3DaKqXHnXCyzwmHWsASgvMiGwx",
  "key15": "3HGjufaV8c3zWP2ChJgSF5qTtxcfF8zciQDiKZx295Q5WubKTgdbrHjemFj5u4sPw2Y8at6RifgQHszVREYFoKiS",
  "key16": "6oWdfTfoEHHQvPiq6Zh1HTWtkGKJ7TsTjxEkVMgT9kphK1KYoHDZo69Pwc8iLBzWXGWphTxK3LePyxYELRtz5C9",
  "key17": "2wtWSn2BdvS6UY8Hj2USEMRWMVHrxPrNE36CiDehZKLTNieDCzHtoeeGES5NRL9pB9CzT9W4vzxe6FxZTW4tdpey",
  "key18": "R5KwCAPYF3ZmxY4TERD5CHWoPXRdH5UmsxQCq3PQDxEddsu81ef9upCrKcMjvSrTNVhenNxNA9S5Y3NCWoEreFv",
  "key19": "4YqvGTexrsnshaARyS484ofsiFMPB2gF5WJ4yC6QAaK3AkP2aLPPh6qLsYueHWShKMfhU6ZS9gR9N1tUmS9seCZo",
  "key20": "ZYNF2SMnoS6q9c5Fj3haQHD9TU1vVkUYFSVpDuDoKSv9Y7EBQBSLdeFj2V7CJGUcvdByg996tF3DtodtzZ2bXy6",
  "key21": "4NALQLkH14EDvE8gJFEq9NmrwmCMrV7q1pJdSEDkgDgHdqZg5jCN11d5B13kWSERfyShX8wbT7PiAG4dFra5Ltz7",
  "key22": "3GUe89wmumXnHbRNTxTH3bWecYMd3Afg6naMrQF87RiUfeTtpyix88dda5ynhXa8tASHk1xD3npHV2NQq4CWeiLy",
  "key23": "43iwcCnin79C25P3dSXsoBzniGeE5WZoJJqXRxrJ6muvzSNbfwaNEAUm1ta9SCxoFHKeLLdzFdNmqwoE14MHttbz",
  "key24": "HXSVhypV8erHLmyY24EgS9zh58Ffdk68mZYAScuacrEaF4ZKv1oLSmSsU8ZUBBYgYuRpSn13cEFJ4GaPji5eydc",
  "key25": "4e3eVu6kdaUtEoAfHYBTkS4ooTAeVPHv1XyMtDrFpmzJfYSZjM3mmzGG3d3i7qQ5dn8vKakdWioMfh63eT6bzBph",
  "key26": "47ZJBzXWHK8QpjNZCdy51kzv9NiiBB5tR4D7voJ1DQTMTvLzUCodztDpMKuqWxFPuQBPPkh8fuP9QNtmRReitztQ",
  "key27": "3NotT6qdUv2oUiBYWQo5dXkrdhcxR4kBvPtUMRd5JG32DjXGb7g5u3wD49qAR5QwtxihoinCsfQQxiE1VTTKwXJC",
  "key28": "wbE33t86Khu9x2ru16hNCkeVdFcvH7GqkJPoALpVxL12AhnN2TLpd8ynzmkvjLUmsDzudzW1VN3w1aTTUjyrT1o",
  "key29": "5buGBerDvZW5vX7fECTAahA7oM71XxoYtsYixQ3hiyLc7kEVr6i3Vino7Bf3sfEdeWPLFXdqH1xU4hhPjn1gJzy5",
  "key30": "5Hr6avCBbkiNBiiWPU6eeZbasm7xtybqJBU6kzHZ79nR3hpHpiPhd8n398gHQCE2run54uiWspEd6q6BQH6yyMis",
  "key31": "2CVhhE4LoL5V4ZtPgzUNGvDep34EU6dbmLam3o8qD9VTod8JqRr8Kn7tU6hiyig4dPtvvWximbgTAneVv59G3mdH",
  "key32": "616VnoVv3BkeukKukFGUr2cCMUZevsFgPd2T1jmSY3cTX85seLSw5tDa8zuHazAoCT1oXL41vB8zshb5ZoqQDgtL"
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
