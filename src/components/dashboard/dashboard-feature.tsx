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
    "4C5a6ZMYVvnFQM9oifzaPij4AyLNRjxDvkDPLqm1DRrohZyhnCe2jxE9TD86p6KMSjeQJaNz4RdDy5H8HpKagnNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w7MoS6dTXu8ZHtjvEna7UK1uuKkqtkGTcGLpRP72UmHSQNk2pAhbrQhZxKviNDerj74yVt3G37yB6wvbxWLSqqe",
  "key1": "4HY1bSnuCW1aNRgY16WJcn3SDW2dKjC7YsxbJkURSvU3xXP9hN4ufDAU2J3X5hntEtA9DH3gktQTLZEqj1owXrrP",
  "key2": "2SfY99KiuGV2d1p7BiYo3nMRvub22tGZHTFCx7AAZkKVwZ6zaPEwwADG9EepqnJAB8AkhYLMvsBNVbo1jNtJs8bc",
  "key3": "3wA96yAzwgUrkKjAAGa1BHzESNf1ghUu1AeEzGwk1SZzGtpKDjdsRt8NeMUJ48kF6TjR3SRzp84Q3nuY4NVgp2vZ",
  "key4": "6FUWHBW726m57fzf5CMJZrw7USvTWztyF2Xos6DcEcJTsvPeZSPq1GxkguBgnEQSwcRNFXnmNCKkw9hpavkRrHM",
  "key5": "5Cha3VApTZvfo8axhoMrbd1uv1hdAnQzeRZGUivP8xGX6dELiNHzEja7aZvcJCmmNFWTg2PRcH2gRJoN2rRonrPz",
  "key6": "2P97W4VGYiaM8XSXoy9UfJfJTrwceif8HKrcyTSyK5Y5brN25AKoH1nSVijgntJR5mFwwpi7Ss3BRgRN5osxYt4v",
  "key7": "546CsMCXuY4mjuXju4kZavDVv3hEAw5N96AKNQUTzoBoUnxJPBvgsvYxH3LQUjSZaqg5Bepy2cm1jPTcTudpTmr1",
  "key8": "21Y97do6Qh9aboXa2QXm7YAy2bWGWB2P22cedydg6E5Sf54rnJjotrKLKBqzUnSPmoNx1Dx8CxDT8L4kSVhTx8FN",
  "key9": "5v9tr21sjNKv1ZCNmumwii5yN1yvAeNbv7qEaPYyhXrRWkVYVHwHzrj2fSBcbdZ1J2MEnqwGy1tSq1giv9Ss5m7z",
  "key10": "4DULXQ33mhQjjXkFrBCUFhTNZvJikCpsCpLvmCSKF4rXWgkXLB1JRMtXVjXaTXqsBWkD9ma6fmMcFsJY48es824C",
  "key11": "4BgV7BqZ3hxpZPLdQrzVKx8fKaGdnF3yUEEYGfmeZ5ZDe3t2guDNLb7MPDncxbZPGUFSgf9U1Urf9L8npK6uePGr",
  "key12": "4aUAqGNLh6vuCHziKbfM3VXFAWeE7WnNNn7WqtK2NRwHfX1Y8gSLTKRb7A7SNL3r8LFj9ZST5T6cYMf72xkbXRL4",
  "key13": "itBsQwywcLWFGqz27G5oGbn4ehn1eBEQ8iB8yKJDuKy6P5BYNhd9mWwxZViHRvvcnBdFkx6a69pAKJqJ9vFxfDn",
  "key14": "3J7c1fH2g66Y9q9Ka7hbSoRPNexepG121sUKiH8dcnQQoKiy47AZuHMCXZ9BaSPhETNQWvKo8C7Bs3Tax7NdffiZ",
  "key15": "2AzxwE23agt8Bkbrck4rmDnTpxSbDDUqMBVpbg5unHPR9c9eEAqkzC3codvoJUVNuyNG2fRFge4wNRQscd1cb6Yt",
  "key16": "Uh7h1gQCdBTixzJezCqyZwD3eH33rrub7tHL9jL1s7wgfFoJTjXQxeDkzMENe9oyJaft7hsoRkpHPhH7GsEbDxR",
  "key17": "5cfZS6b6ex1rc1jPY6QhYXkRzxmSApaHJT2DToBqbbnBPWQVk2Pph3ujtvPueJ3kR4mtQowcTMioZKEwAigSfUyU",
  "key18": "4LeQS4ifwav7PYghs8sB6KQotkKeEFHXedmmr9Gexn1ReocsL2g3uXB8Ed5TxJWEGeo8GpdEJScGpoM6APUaNZT3",
  "key19": "3VUNekvtqoevbKhndYmiv9KLUSrHV756ceqV14g7myzsuh6K6j2Z65ZkK2V6QmkwgAhVp3zfed93oZ3avvJxAsHT",
  "key20": "57Wnx26nMzpBMpgUDnuSErCyrcohoNjsnU3rRLnzUzV7LZEuAzBL6CmRQnZDXSHZAtGQ6kfXtXTBdU9WnxLR4Dnn",
  "key21": "4ETnsykBhRCTy1MMPVaGaGwYVnt7UE5c1UEvuFq8R1zgtNPQdXCTAev5rWYL5gjfCh8mNF11PwynpK3NaPXRbnd4",
  "key22": "3THcyvHsi644t7nXN4T4a2cnq5384CuZbnVeMW7BjnfrdcEQNw17A1aq6P8f4nEEurRPyL8GHqiJF5tJvudtyzjh",
  "key23": "2Q3G9XTmjyiLnj2AaZbox3guKBqJxusBHmEQCsmg7XW3f4qUFPqCmPe3UuyXUTC9gfJZnss6WdF9BB856vBz1LQZ",
  "key24": "29HbyvqgMr3BsvTSJ9XzVcKMakr2DEfWcPNSAZAWXNydmW8Kq42goRPtEPheLy9eUtkZFY7rNNfbbeVUCqnAAbLf",
  "key25": "33yBu84gKh3uJmk1ts3pAaUGEE2YcbYAHsFPRZzUtcDQxNnpDgtfs7FX7GXFkQGsCoYU3mdo1XTjC7AFYhP4JkQ5",
  "key26": "5sHpPnsJ9MvNXxS6Ecoaaiva56ZJG54uEVb1VJyB7Xq4xQfStaDMwPntJPB3awZt7N6kP1CxczvapRPNg7rmFF3C",
  "key27": "3LbskBmD18G5bdG5w8GnNTnyFJ3GufBC2N9txKL8XYow3kq6i1V9NZWakPcddNK2ERXYtsPBL3sjYrNPtxh1LgVK",
  "key28": "2v2Rdw6rKN9axYEvgMGkCA8zspjBrjwB8iQgwqqQZf9eGAh8iztKaCYrUi4UFjpuh63DWrMroVFRNeF21g7CQPE1",
  "key29": "2ZZvXZ5UHt1gUgyXtxhwPq1VnqayZyjfrXyvgwqxBT4kHeyoQQyC3oeyzfHMWdYcJBBAbc1pyxtwi1jN83R8qYWv",
  "key30": "4CmGQGi5SeJtEuk76eGc2zmZG6ispfvAttePqouwdqeA3eCKjHeqaRdMbanYJ2RZUSV48DMjcrq3s8SGQahdP8bZ",
  "key31": "ujrVHS7HkJ8nxEc6TzE1jgZC5jpJeMo4ntVAxd7rABqoDoop75HhYxdeRae9Ggye8ursZ7k9CiWsezyKyokKvN5",
  "key32": "59FBjC4b8Mcn2fZzVTpK5QDXEusR6mpL6vsm95qwfSW7gUE9n6eV3FwCi11PBJS3bvxekH5Ceia5YUfrvCsGZkeP",
  "key33": "3RGX7LPhvzEyWbw83Qs8h81mX6TYAfX2ip8QppFfA8bp7dnAPmYD6QAVZKnh8xuw2GXVizWHLyJ8sFWgZBgaxGUu",
  "key34": "5THXoyzkpppfrwjj8yKbyP1nuUscMos4CrCeHECKKBfGNxYstXH7xsc6QSjzifD3m52wHA7X3PvSwwAKDXGhz5Gn",
  "key35": "5pgrizCQ96p8yPojhAMQ1c16xVVJoDQKytYoeHsNEdXb47sV7t1bhbUR2Uc6m9Bo7dSc9cUXgX5Em9m87bC5F6nY",
  "key36": "SvZLDtCF14XdpPYGDWTTRbTdS6TX25nj39zFdua6jGEfq6TFdi6HhPPFxX2AjPNJbWURLPPpa8oTuhuH8EXy1ot",
  "key37": "4bgpNXAAh2YNHMSc6b6NFYHxup9CBtt5rarEqfnJZoqN3H3GxQy6cvVqearPrsfBZmzf31XgSBg5WQ2sVBNtWuce",
  "key38": "37No2o1KUBA1FfA5JimanzSdgoAN9xZEqfyNSv7hsMLfVgGDJGLUsX1vryM7b5wJEtzeTeijQmSU9k3bpjeHPjq6",
  "key39": "38wxNL5gVjUg11EJXnj7Pw1Cg2uQMuobiVeXC1FifYtPx78oMYUuTPiDdLSHozGzaWioZ4yQifHpof8JUqVwMNbP",
  "key40": "5DebrKLkEsUhU2hE5i2w3u4Qk6MqJ3P5H93XbFPupvyicVKgSb8LYzj1fjzuWoVLZbCzx3fMedw4LfsqBsCeg3qi",
  "key41": "3xokJ63U8wmuFmbxgxLGfn7WWNQpWtakgLZoyVHUavJg4aUyfGdbyoKau8FaQG7tvA1DgGRsU8GF9EiPJFUMp4Jw"
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
