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
    "uvsQg4mSzYgsqGHwuZoMf6zoqrL2gwMLe5CrxqSGvhF7br2DdpCMKn9FFcS1EpCjz5xF3JfBRLnCkdTuxLvFnM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HoJwi2cGJnLyNQyUC8EpsFKVrWjNTR1vXPsaVCFgb6kDWupvn9RRmdxW761mZamc2Vb973dNuoqdjpRt2FbWgkw",
  "key1": "2GCLvkNN9zKjTrzrWASgbgzpafBpMVBNHAPm4NgamaXkhmE9RFbwsQU46QFnDCZskGGmUF5Skpoos8g1pwqmfU3r",
  "key2": "5f67F1JFGR289jfTN9wgEaCVEajjY6yGkByjaUzLV36jjaNfAWMrwavJwCH7JyGwupMJ2GwHU4cSwgVnb3Skw1Jd",
  "key3": "4XhgH4ymjtqBDvcXUm4XQZG9YvZMo1BtzS5m18rQBi7m1w5b4ApLNjCRHJDHBawEsN2fpgbHmiEqT6g98FJsqH7S",
  "key4": "3sH4zEjYCwN5PGwWWcoSG5eHCtSFdch3vRTVCtZQ7hNQCQHwififx2MbbVAph1HYkaNshengcTiLnfSZWaEUf42S",
  "key5": "3dyPneTTgmSi5jo4BgZ9jfEWmwrJurXWihjPZQsdu9JTDEAVbbtr4b3FWhKeEiZvBoAaSEqZvkAV1j9YjP4A8PSC",
  "key6": "xQDngesgxSnRsv6buS4b5FqmeFbfDWFxSHW3wCBLMBVVuv6GDQSLrSmKSPssgfhinRdbn4L1FikoLUCoiXCH5CW",
  "key7": "2xKJosf5yRajFoLjoMpXd8ipqbtmqb3kP9c6L8GQwJ74LWs56mgK31ytZY3Ts6D2WswpW1QsRreLhtBsP5ZeTixC",
  "key8": "DGT1TABMgzs1nHcR3TUb4rf67NDgt5HhUNtveY6LaDGTR2Lm8n3NZ74gwaxPkagoDqKYxz5XUPf2EFfC5fb5j2d",
  "key9": "57vTLfjvcPMATqdYY2jjg8MjQmvsKQyrToWLTZYYN2vnTcpdadswfcWYqnv9MzT1LYdUQEDGGRXYbnmzAFXHjQbw",
  "key10": "cUfQwpDhX7ekqJXYG8nsrfiUSzFmPPzRn2RiajTY6duv34NPLcXwmqXmEniUV7yXBcpvGLNtqhCk7Sv3e4mCig9",
  "key11": "2ko4nwxhxVpZ6a6NntGhyHB26T7jobTn7brWRVF7ecqYGxwd5aFCgLM67p8cckvoAMfLuvP9N5SiGgaaKAfo8qN",
  "key12": "2QA9hH7izKHD69ASLN4DoXs9NTwE6NR7A5gqFw9Qwv9Wj6L9cb5NWtCsvrsN1hRanJqdURfgPf4jBCR5rRzdDuEp",
  "key13": "P5ptYNRJj6Y5dVp4UiFjrH9cwLnaihrhrtx2XvLiwecBFk46rsXSamBR2cYJVGYNWnqLA6beaj55vFdg43jeho1",
  "key14": "2Z28YurCs4ytciz7nYpFdsoKqN93KwUaVVx4AK626Z328pEFjZhAHvgbG8HyLdFq6K6c5ATqddBzTiw5M6xnKC7K",
  "key15": "3t6KmtGRWctkyoTEFnFCYw61cyV1LpbK1SB52VR8D8FcopAASLnKEHTizmRGX65aEFvghy1xwtowXrFPdVrf2dYy",
  "key16": "bMJZh1GiSu2QhfGteryKQiPqzvxM8jLStbx69wnpkJ4rKcPFL5TDMPHx9pW6K78fRMwdcCwc7hKzx1is1gsq96L",
  "key17": "7dQBigQcNJrngLCfMFEfaeb9hBDo8AwC7VsiRjyXjFuF1ZhbLvV8GnAhq3pETFNSohLgvAynFLbNWSPNQAMj5jM",
  "key18": "3bnzhszhGAPZDRdAtAyps2ao6wtHsiY6Psw4ncsH1wkEoGPLfDwZ2YH1BbXDrHuMrfnDExmAdScMhtfVPitwHmD7",
  "key19": "c49AHy7epegBgGxTsBLcJ26qh6X1N2dUwwQWohwp7SKWuot3XTjUSW4jugoUwUfXR3EAykmt6kCVqfHLVg3ebL9",
  "key20": "3NpSQqj7UcypGhzTEpduv5ffybVbX5YG7NFFDrmNjwKSY4RfKUnBWXZV6X8dkJQBczULD3YxsQyaazy1Lu5BMzoF",
  "key21": "2tj5Dnr3JUBBCC6nKo4KmzXuhFxE7d6DjK2skA2eTkgNKriSQuhuN1MUKfReGUwx8UTGsYnUpk7z3AxRMzJEcdmh",
  "key22": "2HGY7ayDUcEUYk44m452NXnBeCRMkhk3AM9d7KgJkA5r3cLMLUhsm4garfxpdSQ4YPSkig66wgg3US4bH9FZWs1a",
  "key23": "2pf2YzUZDxiF6DHGLZH3LpbYXAoWrLYsAB7HMRKR7JTzamF25xyiXuz7gawmszD7FZKRmx4MeuVGv5v1jWgitdud",
  "key24": "4A1enyXXxpfm5TFCw5fULsLjC7E1tKR7V9T2KS6bEuX5FxteMr1cvKVfTHT9GrSqtYJ9Pu4y4gHCP16arzZX3fxe",
  "key25": "3t3VUJX23AjxEPQD2rM86vNykK62sVU7EPz1RoyWHdyhHobBnE7BCkR1H3JaRJYABb9LbTR1iVBG73rm6cvWhm8E",
  "key26": "4dQqSJzntKbJ7BuAEvqC76Ezx7vpbzfDjLEV59nCLZyVgbaSLDcLuJGvKmTSoYt3Qf2SwEY79pbhdqyqfybFLxNJ",
  "key27": "2eSymY3h3KwR8FVGaUrzuwXSkLaAMKjvYALU4DioSmhqUVUKnLxkYP2ewUtNukzbHD2XWgFnANqTEmNPDcsYYXn9",
  "key28": "2nceDweWLfToi4PJhGa4JWFecAV5yqvnjoTu4j51NSTrc6DjxcfBAd5JoZsEAdtmpsburyDqQMCeDSP9EweF8GFZ",
  "key29": "4mhBJGUVMiAuS4uLwFkU8qhBoUg3jCinhCbsn7aSMuXQGqtYGJDpysAFFdZebGDZUcwSuciyVTkAyFrGZKM7eUqz"
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
