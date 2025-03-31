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
    "4pmFsJFRZMrHKWaPutEHeJHBsT4Arm9rFPgpY2NXNZw8jCabvPMLczzieD8EswqovHdu1Nq3DeYQreQPGDviiBjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HT2NXv1geKHHUZKzsjWgNTxcRJE3tRBXmQVt9rye7wJuWAWCPstzh5jnPSuonJajVRsGPyVFkijirJs8yMXDqP4",
  "key1": "4qZXLEuZuFK14W6aiDJqfFuhLroVszscvk7EaQSBn8e6y8iW1u9spQ3sZ1raM9j3PgbA1hHS2cnVCQ6RvfJfPQ88",
  "key2": "5DQsXMq3EotwEgEMTQWJTZRcEV4M4RVNZSQ88HRB4uJYREw48NSBhpQjyuyvVYVd1vLUGVt8aEZbVqp6Qf2AiL4s",
  "key3": "27ehmauaNehc4xGNgJu91v6sVa7XHBnHrxdzGX92DCqVoKzHCHynP6GFjJ9FmQeVPtuZJP9W778n94EQ8bhdZh6L",
  "key4": "4G6DpCLgeTdJLzfsp2m7mw7vwsDWNYCcsJaQzyUwRRPcp5Qhv3FZ67vMQhktdnDD69nMcSaC2eCmnu1VBpXYNUgx",
  "key5": "4f9q52PnhFXtpFWEuDX29qTDNGmmjJE7duzXaMLB6KMgN7Yn7cre22RDVrYCqGThvXGLGzzHsxFChTHcLN6c6Bde",
  "key6": "N6SarrNP4ANfGr9YCbgX2VjTnseD4DL3oxmsrPmZjSKsvjgfUGepbCsEYuGUhKFMDrQY6MSjHewfnPAEZbxdCDZ",
  "key7": "5UsVyyrLNwTpuSifEMRChFTfYz9k6HggHAv6kUkKviriZ4Mo1SZimbBw1ZwJdHokf8cF8QQ8uw3cVXezVRLbcXS8",
  "key8": "2Yu7WRjoxbgvsFb3gzfbqrCNnNhHsz63M2HrKzBf3JH9aR1MMCdcmuPNVNdwUSoSJyzT7KpHFfWRop9Bi9W35DgG",
  "key9": "4QTR7CLWZm6ptJoxdfYAz86kXrC2zhnhNopgY18i8B7yx4NZ5KAh6QtfbNopyr7TDwyjKLCT73J4uiitqsbGHAjk",
  "key10": "huVCVwmzMQhcXuPJtWooZyed1Ci5De2MNabpKMrtbqQsVsGZ8Xy2qTb92EGnfUPHpKuFpoMpBnQb2dcyYsDjT9b",
  "key11": "wxzrJkRMvjnF9uawV32WKiGxvqrSdveYfzmwT4LhrTiLTLUgNAZcyaNHJP3WSEmsEWrkdJ5BA6zQSm5ioZionCw",
  "key12": "4kGnkFSEoZtA5WmdPVpSVDKcuBTHq86Y1bdiHxcSBR5X5KD6VsZRYPg1vtT2HjzMk1qDKMZPjg5LpZxhRd7wx8Se",
  "key13": "44u5XVSzx1TMyW7wx273pdVKE5LJf4fw66Cn3cA85UuAq6dBQ8JtwY5pxR5gaM8GUCnXEtYPSWGVwBgoUH9tubeB",
  "key14": "3YYAbbnu5L61bHwdryorY4YuDvRmqiYecxQ9kYgS2yQt25qNMjrswkcCnsqPyVsVnptPNFfn2RmJyvA3Q1CPzhGp",
  "key15": "jatVRMmYgArWAPHvysdfhiHs6u5xHxs5ms8dSAbeonPJ1rMwpmZtBATkxwDTNFJsttzrqj9919e6AroXupQoXz8",
  "key16": "3wDKCFj9XbUpCEckcWUatccmMkjqgYDXEZud15CCJpkhuo6pEjioM7G5V8AtQAcb1CzxAwZEfHp6cLZRu4AbzFVN",
  "key17": "3kCUkcChV9pD2TNhBYdanK8sJNxCjqsoJimWxbTDtEpZ1a1jXD8ngKGjyt27ynhELyzB92wcbGynppXNPrdF6y6B",
  "key18": "5ddZzHs7yauri75vnvyNVvFzQbgS9mbh8kx6x37DDDGMAnhfF4F7GFiY8VWoWjsV5NnZnaQRS3fF1AEdUsth9gQG",
  "key19": "3EFeqBRQ3Q5Brbt7ReCHSRABSdRWPAxhA2iHxxEyWeJvdBKY5KFkxavzxRhi7Dytm3YnH4NZRdpqLFovtNMhJwKc",
  "key20": "56Ak8tu3RMKaeKp4e6MBfnn3xkjFmPoNQPQboPk7HkDcYA2Lhg5EoRN8d19j3MwJniNJtSVPPdrTLBDA3V2BDj7k",
  "key21": "2wGoi3UsdzWJnoFoFVUmu3b5B1FZmwqxFsYuZHu1JeNMHSf41qWTJevKGhxccQTee9oGRU68YkV2Sbd1K7bfFUFN",
  "key22": "wppXykVAGKQiPXcjkifHrecBWzZGsJpG1YA8sKoVsR59evFkdh4rL8UM9CfNTpgD6kMEa4ckdCk7ghekfRV2Qua",
  "key23": "539nRjVeBrHov2faikbL8jTMbKuxEF9xe1U83NMGSw34G2xAbVDPHXv3F1GgtdxtfWDPjMKPKHVkJbtc1G7Q1z7o",
  "key24": "5PyvZZ7yg8qPdf4GGN8TVQT61oWvGa7xxbz7cMXrPdTYKjk74QEU2MddsV4CZUKdCmF3z4TgbFiUnVhdXvL6zbYR",
  "key25": "3N7Wu5unp1VZ6C2aHdpamvMLHfXTNtPWYYyo4n7vuXRNY2XoH6ramEXFmfZHHVsjCHQnoip74gPECrkrYAnyWTLE",
  "key26": "2wGQEypcXEdgUdErZHc5FgxPtvyaWdbC9TNsm9TAi4rpnakS3v2kejeia7A5Vw5D8h7JUY8h2HxYZSA99usxSqKy",
  "key27": "2AbM4Rq8xU9haSF45zH2C9j1kWRez7d4e9e6TrT7Bo2rKUbA3oeUb9xq3opwjASSSqHuUUbSPmMFcE4JTkLjCQH8",
  "key28": "3ptJkJyPhCkHYJWZjm3oBmwbhSppuU59EXFH7C4pSacTPjyQE3PJCJuUMQvzLh78YDueT7Cu5YeV1bqDHPgMGGGg",
  "key29": "5HpUdaWvVaYxgcx5yV384xdkvvDGZrwBPADzDTau1TkxavtX6SSKp2oVCpCdLDbkjoAucNwQjeaRh9N3mDdYSDys",
  "key30": "3kFTiYqMWmF2zSAZuL4P31ovcVWXxKM3WrejPUNkkHXceg2a7ubCx1Ma1EXgAciWMvBq9dvvRotD2f7XUoVjC6KZ",
  "key31": "4pwfXNPo4dMAep24x7csp4FuTstKEouTBnanDAcjYh6XKHd1XDfu5SGKPLHEbNXzjyHD1bmzhEFCM9ym9Tt2jY1h",
  "key32": "4GpFqhvjufKrxrdwQ7ojevN8xNDRH1w4H7XhRX3Tr1JYAg44Qe2u9PEgS7gSrfj2whAaCuF5A44XyNEMWxXPR9jQ",
  "key33": "2oAyKhB98yySXvv42cfWR9VAhfehsTL4qETEXguWFmyQCkRA1x8SmjMajsSX3gVnrmuszZnpivE8858QYHzHQ8xh",
  "key34": "cULg9LqnyDKp1SNnHwLa44ihm4RenbnYr5XQQKpifAZGzxiyk224J7hgaVWKkeYkzpY5LrDB4BBnRHoCRigy7Eg",
  "key35": "3YRHXyYcKLNdVqKyaxz7bKXdqDyoNmrBa7vidjTgFkQx5jfRqkXwM4DGuV7vnzu4x4ojpQrfuoZ9zbriVyKgLaLm",
  "key36": "3MHkCUDtDMiEnnxA3Mk1PsL3ENB3oh6DZF4DuBYRAngMFc9cYwEuzqoccKwiitTzTuzYcVNYmfQviTgAcPGVuUYD",
  "key37": "2dcvkXbhMJesrBNXE8xugUhNKGdVcAeC9JJmtdYvthjvYuzvVGaNNqGCFZMovYqmbqTmxXHqLoEcmnjuETdi6YVE",
  "key38": "5zVEc2SzKCHDwWUQTnZzdHRvRtm4GGTZ3pCWcJkXPRBXaDzBDXdTK7hkzNrr4DjSgAjFRX7odVxk8Ppt8hP5iCnR",
  "key39": "3T5vJFKDSPBXtCpw5zrKyW7aR1M8JFhow9iYbg9xMgFMopExsPJ94XnRXCMJo3dR5vZdbnck5J7883xYBgspQtWU",
  "key40": "EoKj43BjSgMeLCpCuc5FvxSx5wdZsQmxX95SaPc5stMaY4SPYK33zXXSsAV2HBCnEDAT82yRxTfet2nbLggGyKA",
  "key41": "5UD9u1P4z1Duv3RVCN7NfMD8CdsrZhRdFjPgpbiSjx9BnP6NeNiFRnZ8MsoTNJviai1FmSTkhgLJmcUMjUChtAmx",
  "key42": "4Qr1BQ4UNaww47VhYq7aUMEvKpdC9BHpFynwt3454kGLmTYwKcFkgs1aaEDYYomqttGUVhNfDVGhfpKKVPWXqffP",
  "key43": "61pPD22aokrBJ9ms9Y1Zex32NVPfvsPXVRqKcEp1fd7LQQytcuaWcJm3YrgUbUjTA65NpRyhmrd56K7iq5NPBha9",
  "key44": "4dyRFRsrA7PYqAaFFJqF32KRKX7q86UtDfpWbpf5dENH7LucyiYFeJ13Cnv1f2WYdJrEX3o5YcBqEH1aAf1de1tt",
  "key45": "41E86cEs41emjsNWMdMLRVgRrHVHPu73ntFCBSPu8MJ2NQsfc6Hz7TC6mGWtmksNvCynBZd4Zjn9D22YSEWYqcf8"
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
