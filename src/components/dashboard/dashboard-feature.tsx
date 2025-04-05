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
    "5BTDpo5hTeoiAFMyzCxCahvmT3ZHzfaMedj7vwipnB65ATFEgF63RAxnP43g5QTDsKK55z2QQhfXBUTWNkAgcLRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpDnwJxAf3HjWiLbHFyExHfmpsTDuea95cMrFsb6onCa2feRYz3Z8omRoCZe6SFwnJitfWgZ74PBZ7cj48JMvts",
  "key1": "3DbSDnX1ZEnfxyHEgnP7BL7hhujND9cm5H2GML4EaStnSSZZPMinpdF7KPqyPHPgcxN9aHwZcJuN4od58QoZPoec",
  "key2": "2fws9XJut45EyN5Q3QbQN4r29Z562WvNsxxyV6w6yreGa5ukVjfmUQVks5si7jkty31utVe8UDNTVqvGuqj5a7uz",
  "key3": "4aMjzgPgBaKe84tvmaCnasToufugzufgVgWWeAAAh3rCNzhkjcYkYfdam3gEzzW1iHsbkC2XB8XtTeR6pZddzziD",
  "key4": "3w6ji81Jg7k77aduxxXJWVFJCkw835zYfZL4MgUVNh4txQjr4o9sjCDtHkpZQFTevsuALaHh1tVM3TAD7aL85fT4",
  "key5": "2FTtUx1QkwDYxm7sMNaHRfLJ8dvfSjyqHweG2PzHkcYpwc8hnfNgtUCvCgLfPpKyuWdy6kFH4VTWX5v7GKBKWEwe",
  "key6": "53LUTRCWBWfP4mH7tUtCcPX9tmn8TNt1tyJjLx51Z3AdHusr3nvD3gQ7xjf69FpXJyq6FXo75v9EM32na12Pxqw6",
  "key7": "3pcdGh9PjA5zHJw6Qo57G4YGSkTXmUMUxEGbwqaAf8juTPGpXfZN4YcdNLZ3MvGJstG7ZJWQMiU15vDcESgdrNki",
  "key8": "5EcsGkxE6HHjiCaSa2i85iaF9VZAbzQ8E6rFvK2FMkyEq4AtTyZGa1ZCa7JEVFRHX9hPPCPFwMwLmaXtq7cHQP6S",
  "key9": "48148v3XqNUKDHTfyGe62ZzKpiaih1hgMp4puXoFbSSTwu1hLvWfWn1gK7u14xbQaYssWYv4ZS7nBq9YUN7d1Azw",
  "key10": "32htpWwdjS7pBCQqAunuRKsJERvhLWJnDdjyDUiSwVwvKU2J75QsVRNRgmtkgE46Jxnv87Y3tVFbzoNbbrXNaNMD",
  "key11": "46wNA6fgY1ufYjzkSPjdr7vbtX4MFNisGUjn7U621r69iTDFZCTzNNZAyVfVF7ZmzQ2PcCWwWrwnGFNsD3urM8vt",
  "key12": "25yMzsRwqrooHkgUspFsyfxGBXvcNNgG235UTY8A6kyoXNqLvRyUnCurJ2gxDMmiVEPxXYBD8DCTzQ9xiTAya7fa",
  "key13": "56knxPu15e3Vs27kD6p1tqFLRzmmypuY3oksGbHgQJtLWxUHwarRR4K7whPvfrSoTXAs3kw5RCXeLj4jpFKLiEWe",
  "key14": "458isct9xavK4EAWenRRabA51dXT2ghSsd7CzXGz1RGWMnmaP8eiSKeANn6nqhiPvnFs8R6gzpoZYzbvBfvktdQa",
  "key15": "4hPcAyQZnHCaYZuqMgXukJUrHjjPhbKkpSNNxuK8wDwuz9BdpMqD4BXqxy4YVofAgq7xJQbjnHuqLNwXxhtui6Hi",
  "key16": "3X5YRmZVY8AQegeqqAuorKXxmgmAoys25TKdG7vMGkfybVqoz3JqREDLK88MsyvhXsgnYzr5HapGcKhtLdXYyDA8",
  "key17": "5Ttpgd7a6FqmHeRArfBTEp9GaHAmdMbWQkxRvY4HB4ZhGUpvmxaosqzGT7Qnw3yJVnMpnv4j5JoDrkzJor8M5Res",
  "key18": "31xta2RLfXLg7KtxYrrfW9BseLoxGQvuJ6rJSNeKPnBu2ANqRSAPNwC8tnRXTPe8uRTWBEayWgugb6Tfkra27QRU",
  "key19": "2geErhJu4NW1H2Gy77FsUNhYh4QXeCkYyVgtqhnVQdqNDDNjcRpyAnmdQ9Dqjw7jv79UyZGspJP8eT2rn6HnNciw",
  "key20": "64K8pzduJFggV98bTvMnG3hVkFr12s64onXcRqLT5DJA2oKvk3w2vEWbXYrJXM22skhDLp2VW7REZqHT1j3EF9ut",
  "key21": "3VHGEHAa9WUbbQ9ERFnQ6qwq14cyrE84ntkSZuNAcg7S93TXZnFtYzwnS21k4GUqN4KyKRLbhwCPdniL7YeQariZ",
  "key22": "ZReq6QgBmjd9YWFipC86QNG54iHQfTCtJnTdaTivmLXKjxidEvpmRvN8TbWHAzZ8i6RnjaPLTMvewbMLEuQskFP",
  "key23": "3q5b912DDka8Bvtpvf7uhFDRdRtin76RKGizgfzDywsNmCgmaz6GUTEM5VECTPBX3aE17zRsZbzi1LRoNQ38BZmA",
  "key24": "2P5zKPRe7ioRNe5ugH6LCART2X8msJ1j7PAgr5vxePeuRHVq6Tar6jGZQx4br1Wyk1yEVcaBZnhsxpn1Q4fsXMMo",
  "key25": "2Sw9Sh1hRneULNF6CxM4p3iecVXqW34vGLQpwoqjh5xZiu8hKnts9EJJ2uVboVcrrfXLE9rSsnhnxicmj2SzXGuL",
  "key26": "2EsTo7ngmqCsUkEUKKL9JyJh9YaYdhjDxBrWc8s8THGQBtbjChtqtaDsJtasCsHxEt2sqtdd4ri958xfAUQ35PQF",
  "key27": "2gkZuwr2T379n9jGSSFMBGfSsKkncnjtonBGUEiyeED68E3MNUUaZvZpZ3foeSZgeEt7e3GnJxX6VHzX939KtimG",
  "key28": "5mYLpAfsHS46GisaYz4dcVZShCtvgHUmDkz3o9HmVhFtYxJ21Da5waoPuYUorVaWkXtrw9Gqbx9kocVijA4gSFi7"
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
