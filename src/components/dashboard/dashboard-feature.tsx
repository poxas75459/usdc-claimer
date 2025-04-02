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
    "54LV6JDKQR5zae8dCA4m73q9WDHwiKMw9WLwgL4znHTedHyHDTmx8CVSDyhzDA9ZDWU93whY6q4vahTyRaV28nRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jVswTwAfqZFc9sGbLTStamEJRMPoEdeEM4zsmK92ZGpwDbKaHrPnnzNhELMJEiniAm6EanNnq8kwVFsz64e872R",
  "key1": "5tGYn8N3vjCNf7zgMMSzqbEM45R4kWwesRE7EFiGyKbw8aZ868wfpJ8yd9s7MrA66o4owg9YYvNNLNcahEHbQpbo",
  "key2": "vdNs3zBcKM8roYxd6MjuPUosm79bDCy3SmgFf7pbqxiRX4SJmBD4rphq4t8tTBq4wajxB5LwtNEBUs2fSjHojH6",
  "key3": "3ggMBEDzoSP1e2Zhd5kb1CPJgriWsjujJHLfdaSXsXyn41MGdQ9gtEtbvgspbajuWFz5JCpNGsHkdPaAccX4rEPJ",
  "key4": "5tgkWHdaW1ZcLZ9GjVuz4rWUtbwZ8Bs98VUZM1H7ME48E3jP3PqG3km6oU5yTkDQ6Xpqyhb7joQujzqANgdnMsF6",
  "key5": "26wxR22JtfzVVybkcESXF5tZoUpPVrRnyKTJAvsZKmfXBDe9NHMy5ddkduBCFShhXEtmQ4FQPjV8n1dqrjrqsLxr",
  "key6": "2K9YtzracRKmckj44DQrwgAwyZEdtU7ZdBWsuFq544Bsi5otujpB2s5L6QYgpDDyua6DGjXHGigKTacvepyGhFbE",
  "key7": "Zy4tukPhzmZcKZb3pgb4yAMk2ZCb9BDwhFbebey3GK9xgw7nFqyQ5RCQgWRYR3bfR2QGFQ2meriMMWj53M7RB35",
  "key8": "2ND4wphDLFfGMhRFaEvj1SbT7GEANdrTLLg5nxnKkCKRsMQZevtYhRCFmYEDDnukCVTzC9YQ4NDVRwYwRxXXwzLC",
  "key9": "3fU35ThTrxabThp4fqPXXgyS5wpStgMd1EZYo6KbApJs7qHnfxbqcH5Nz3pdHnEZ5c6gss5RrWvgD8iNjB1L8gMC",
  "key10": "4Tc4nUCUfATjFrh5Jax2hP2Hryd5HmQGdSfE1LgsWmHgbSZpA9KfKVMkr1xJzbkAUtHcQHPWtVJZvft8FUjLnoSr",
  "key11": "5wPsJpk11J7RjsYz4EVU7J23cYnsJNcHtqrzk3o4x9MFYP8WsFRTgG4Keg3CQMcbKk3E47vCstLF5DPVcCqT3hks",
  "key12": "53CHG52f3Mc8VoS4jtP8cZaybVy8tmvRYXfrfTvCy4s3MkHuQsHXAvYtcgJ7H7GWW1AH1WVYqUcJrgCgDVae49wY",
  "key13": "2LgEtnS3T4jP1tqxbtC2P2LTQaoYBuU6XWNWDzU6xsHhjRbYE2vy2Mgmf6fJRZsnGqnvBvousWVzyTFf5QWq4EhQ",
  "key14": "315UUmqkQUvaNSDGaNrHHXZr6Feyz6eYz9G1wTgqV3GrszBMEtjoJYM4novT79DnHTe5e45PW3VvfvcPyEULFJDX",
  "key15": "2hHxCzSpoVZMDaB8RdAcK8e3Yi67L3MPDVMu2mJQtiPYRHSDBFHJxJ4ka2y5QKHPM3FrXNascnvs4nczwVKkB1wj",
  "key16": "AqnxokudwTo5kqmqdjr8maZdX2rynqd5r1baeVm3kTuQcmydjdBoCsJnrRCodGBGMXga39jY1v4jaGRTNsi4cWU",
  "key17": "7DgdoGYvQd65LnvREHVojD4Zi3XtwZDqXdFkyCi9gJ2UJaSK2wJKA6BUnwhb1zfbnLwNSeT1c2NLDnXApf9xfzm",
  "key18": "3Q4vY3tUmTUFpbpLVPwt5WsLkuYxTpjQz5hdZByarPRsJBykKWaNwLPpGRYNiWmWjqbGjxGLcPfsA6agSd3FzwNy",
  "key19": "3yx5Dav5nNGd9AYpJRMaFnZnhyWr66bs5LSLabEdZZQmXpowthGHvPyPD1seDhsf1gLtHMWGeJF1aYyjAAd4NgbY",
  "key20": "4NqhkGneHEX1E352zei5hbgee7mVarHfxScSLTRtKDUynnbFEadoZUubQgMsB4HbZhoUJUoPadsXQW2EaWLP84S3",
  "key21": "4tn6ahAPXWcdHTKjMMFAzWVSRn6Qne93TvA6Rna8K3P7VomiKHpfHM8shbZzGbDEmHkU2SuZ4QnKES441YVekSdf",
  "key22": "33yWecXGfVzAcnrSzeHBFs7SdKiaTbGdG83L5AGEgWaMPrgVfP5SrBQvyDtEhRNMTtHJgWhursmGHq2UqmzpY4kc",
  "key23": "2hUZXLe6AXVWr6FLZchEhumAKTwaZR9VYhYHJFCpE6i2bfvE6bgJ7GvftpCggKRzt1WYyaDmyEVq6DFh9CvufR8e",
  "key24": "2hwb8tTuuGT1uP9voSa8xxi7yX99Bd4hEqiNcqeVrogvDKve9QSz8ASXeWfHsq9gHHCnXUq22RVmKEH44C2WtnDq",
  "key25": "26qPTzz5k54Ld4ZHK9nzJSP8JPVYDrieWQPe3fKH2kBKJLZShqkBXN5Urh6kyKhEawBWcF7S8WS6nFKBaiDAuQKn",
  "key26": "CkfMn9Jo5Za2yhZm5rRjU5VfTxkGPC2BaxAqLviZ3SYtZifLFT96uqz9DytYBvKV4oQXYWYxnx5BFMjU6Xuqu9i",
  "key27": "4ZbcUXr6ZjUZhhor4ZM7dFQu7W8HrKQmpj1j9QnKq7tvkn5wWbJ3KHWeGpQQ81neEjGPH3pWao9nyb8iHHRDSEgr",
  "key28": "2Q1rpsNDRM2H23VFkPz6Hw9yFPC2pqFM4jxuZRfvQk9EMjc2Zj13fTafEUjhK4XCf1EXv4zRKArKjRYFjtirdaZG",
  "key29": "3aughhtPngWBAWS48XESVB33N5hed6Lws1UCwN2McEChd4fsWeaZeb8tHXS4SJDxqK4ppTj4EDuuL5AaS1NfcmqL",
  "key30": "4JFAiAv11WYZhcAJYaURX3iSStChkUrXvnyvd78YoG68bSdQx4BPCtWvmagakPgDJZm2H95zCbdknyFiVvNKLSQV",
  "key31": "423nS8XkfQigdSHhmT6NwU1ahQ8Ejfx1B4nfaHVxr6sZSrRTj6JsYkMY4CKBTsPnCBAKqeETUh9rki9MCep8bi2d"
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
