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
    "2W4HrNpozLLQ9uWKdbAmyqjmDM4gfP5Z1jYPLFSQ7CALmCPjPJo5EsoRyC73cqfq1qyEJ7GD7sZL7V3BSeRVyax3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vkYeh8XPDEP2NgkMJf9moEWAekFwAQWFdbWFbaSyA9FVJpHbWzGsfZXbzaTqsQuWKBb9BSugRyJbNjkbVTnAsDv",
  "key1": "2r5Fvmhh4AGnvsKjTebusMtYqexdkJpn944QGZBtR4R5jFWHbPVqbRWcdnU5diBEJTSZ6zSXxGSRjHi1YyHtEjG5",
  "key2": "VBNbJ88tjHvAN55XDQ17jENXUoi7nQtyq6shyGaC5ZqMM3bsfNxPCWb5U8zJd71B9XMosaE1kB8GdBXvaN7ueeL",
  "key3": "5hVo4x7GaVDPsm3hPrmRjmvEysp7tGQagrEcS8NEpiYnPozHQvEPxmr4axF5WzqbK9YzvufdBZ3fmHvcRbcmymwR",
  "key4": "5gwRVLHuMvACMcceHUcM71hW8PJ6q3yVXyfeG9gojmZBcomkABnZVt6jiLncncvkMc7vS8xakudiRPE7sqSUX2mM",
  "key5": "56nSbk5BRZb6yCkPYM7jGMPDTzAYU5RTgqmjw75VKhYp9Au5cnAfTBXscrx63ARDZapHWPJGdQL3aZYuoN7d3wQp",
  "key6": "jYPGvsVejBGKAcUkSNonV7RFrN1dEY6mtHS5UFRFFssEYhjSkvNKttv4CiwSCQAUwZDj66Qq9s1AsNy1n42u5vc",
  "key7": "QYxdWYa9GrEfcF6Tc8v8QmnZGUPB4Neq2ERSXHLKxbVWvP2xzDdqFyEWkWLApRP3HUBwrHyPLHAAeV5WmSvjsjA",
  "key8": "4Q1AaSDhvHYyYHUFdBDvgRFgSU9FLyhRSccEPdvn7Uw8Lk4SH4E1C9Md43p85buun6uGQRAJmb6Nmsb1m7PNWudU",
  "key9": "3CAVmuwNjDbbS5d4VfJPMFAHQGcKtUiUZWzG1YzoXeRyuvMs2AqTMEyjo3TrdF8XeWFtjY2GYW67Hb5GXAvZBPfz",
  "key10": "5NWkhVr9e1aEnS1Urv78aLGJTiRWEfe3kVXZGvf2mpeq5kDiR8cY4o5onotQwkGKWonRiDfWtwzm9BAJcdJnKWjy",
  "key11": "3ffmrwGo7fiaQpJRPxv3ZVQMjL1nhgQYG2xC6KhDZHKoGdQYpXNFF7UJ6eFiKM1F4hzhvZrJjAkCRTvnvHD8rb9W",
  "key12": "3bgekirEFi65FWShx23JGBqPymbFMZvxBsXGaDv7gV3JZJqWGMqaLdCr1qvAvhFnbeQk3HUSHpNhbqJpeXWjvrxk",
  "key13": "56M3vq3P65MGCR1ZNEboS6HkzZAXYhhS8c5HfzfefrZVd2qxnav97J9Zi6MKkDYRdf8FV3r9vWSBpUYqCR2mr144",
  "key14": "3yZL1pRxVMh6bM9CMwLBueVmugUqcsuhixDDL24eTfYGopmXBMkensLpv5EEPoHw43jSJPYs6zAkhqpbw4aAVTbs",
  "key15": "5De1hb7dUVV4m4UfQUbvzK1XBtK4NbLcEAvwYw3GTyTGVXzutqMmKacFES9wbk4evhMxxpweZ7x4vrHgDufVJk7z",
  "key16": "21gHzKLtYmJ5GVJ3CViiHMpvv4rbBWKPKW6WNvTzbMGdpjsTVdoH6AypYaS4TPmLAnpxtcEihRtCHZQHNRngJ3tp",
  "key17": "4aQqMibWNZ5ceLnZuDc33HoXgAqWPEFpVfMYiHZZyxjgmkh9e85LtZHfLqE9nefeDFcYuFaYy73ZcyHTeCFS5uWZ",
  "key18": "48LgWARagvcFW933EbaVNHngaUsnPfCBys6sjJLm4oUZYwCHhW1p6u3gyqDzDd2kxvFdx969hnAMmHAZ8tCJ89XX",
  "key19": "27GijoyVZKWfSyFANUbCv1wqwHY4Rqrafwo1BtBTrxaScHgxTqGVmwQgrAaqdXayu9b914SPmN6AsDLG4krB1N8U",
  "key20": "8SeCWChqYtfAMMmJHBettyTEfs4o2opJ1neihEqWWJsdZ76ENBC9icRCeKFK29LcyShitXSkfQK87NysqrAePxj",
  "key21": "3sa9HuTVo1RUTAF79znKmnDWPd9Rm8iNeXBJEPFkfQFbwwMfFxUrMQV1DLmAutqsrw1jdLjjPD5mQMjJgGWErUcd",
  "key22": "4kpfdzKnnq3CpxrQ4VikKpeDr8bWVLWd43Ss6HRr765PvdH7t9jMeEsxdNiQuCLGQDzXzZgCC3TXuGRvZM1HR751",
  "key23": "5fovdJWuVCDrNearCTB8nLkB8KAt3Z5EDqySeNf3wz9xUYCzisUpNoPHdQGAHZzXCPiLx4xCgDraMHDp7VuSxvgN",
  "key24": "5De9RodMTRcLSvCPkdcnr96mzWQRwvTXTw9o1uVFj479KNHvDxQzztYugUeMf2MWQg3x4dbEk2cgtBcoweKDjGKT",
  "key25": "3TuA48TZeaiv4eiMLqCi6rp4v8oPDfeifVaS778AqQrmB4eR6v2baJUxzjAPmLjz1Q1VjgqYnebZkDZu4FZiM3mD",
  "key26": "4uumvznwVp64z8dwRCzhQpQ8bDSJsnNKkBn12ZykMNkkiUnVTaMoCe75oqkeiCfbA7smvjwDA66fmQs52kDn5txX",
  "key27": "3LnqpUSNiMzZnqg9tWVZkvBAcnaq3ah195JmeRRKmPWK35Vd1gMXnC5L8CjnAnz9foEnondjFaeWEeGVaLuVRN9V"
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
