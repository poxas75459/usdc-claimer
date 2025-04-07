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
    "Z7rkcvsQCQcgVB8jHzLgtzQ5hWMMvJrmTLwMFStNK3aPwEuNWYkYfrj2RJmc5C5L4Eos7MZfoLNEQSa5WzhpiC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "424xbUdiohX5V4SbXFGt94GM5KSEkmvCQbnzEufdiTQTPiL2u51azH89uNGuFFNDrPdztYG4cGgbd9s8JKrj1vni",
  "key1": "53Z1R1An8AqhRzmYkyKAu98pHSz8DLf5Q3mkR9GwkEDnfVPCGErNPdRa3f7AK3u9ERmPBNB6RuGYjraQkJYAhdWv",
  "key2": "2FxXwH3fRPNMekuCTjqBEZkyWMcuB5UemMEQvK2S72U5nVd2uE7ztiTVG3WBvGEg6w7mFzbPtTYAWtik8RUE4tuD",
  "key3": "4ufMCdpvZvpoDr2Qre1kAaEPZewsGV3No4vXDWsPnVeYpZFyCFYf6xSPRnJnN8JxatBuczW6F98LuxUb1dEHnBsc",
  "key4": "4CFFbRjbRTWVSxgciW9obk8PsJtwJCEeCWJURgMhhbxPCjcNgyCmYWY1HwgJ4x1yVfmCTFg6A1QhChqKh3XfXCqx",
  "key5": "2iyLkUB1ix3QcATA7cbJPBPcFsjA2Y2aGdHwJNtz5HpyekBitWDjmuZTKiYSWKn8EE6ZhjviHxEMY1YqK78fXwRA",
  "key6": "21sDba4rA8L26vASR9dfp49kLw4fKBKG2pMRWWbdovtTkQVAhmxdKiwt4bnmEKvRHT63attWjDwnn1Tf5DYCeykj",
  "key7": "34Z5DCQA3yjxkmsTmcZP73xQ1WsAWm7DHTrexCVPQnk9wpjfnr8yS4SbTU568GVqZ6oCvnVkJGFsJTiqeY96qpMT",
  "key8": "LAC2BQkVjbqBfjeCyo2sjCGXzCKJmv2f2P6m4d9MTDcmfocRhR2Jpi3n4CpawgXimAdLBWe1CubJXKyu3ix4GeM",
  "key9": "55xySoKHEZ3XtRAWe139WcaP9WHgDdwEpxsUuGRsDhSLn1eWj4HFr9urdabfjtU4Kxo1X1Za8bi4avxyJ294rvH",
  "key10": "mVcQEcuuhdhE93Tx7gpJxbvGgFHrH5M122U98pj8XTK3Urmx8ySnSXPeGatpWhKcXEriR8hteZCMCjPBPERDguA",
  "key11": "25m5QpNmoDwS3mbyM2JuJwXnHrGf44KoVgNRTojfzSnTdHnj9kgJ1gL1SLTWyDAxJrPQj2DnBaFto9AWs3Hm7rTn",
  "key12": "2vyhF4A284eid5pwDyyg4otZZCXL39nh7ysK8wRQ7zjaNrsjQPpRfuiP3kGm7ZuF7DDnnKB7fKp3kNF6746BBwbn",
  "key13": "2kS2M9z6NM8LsZbQSfxzVBdzHT5skMBBSEwP8PEa4iVytMbTdG7VzzZ3PsqHyUPF61r3vkWPpPJPpw9bj1FrYL9B",
  "key14": "5w1Db6RCYfmeAVMD8ttW1gkm9hPcrsZ6BXvazGWDF1ov9mcVbVrUNpVKWeBwFu1xmnuSW6q7H1HrwGgWGTfyXShD",
  "key15": "2AQ6dedJKAXXyUJ69gSjhwVmLwkMLCKsa1xFBtMHSgMWsYzQJmGv2sYF7Ar3Q4ALwiUXdn5CpdPy1cEYyeE1rS9H",
  "key16": "4cugKv98s4MmSDkZZ1ztTedWopMjzxEMsWoW64XW6GmReiWYjCSzV5oYyump6TQHZgDb6gXkW6Z6tevf4TvFFa4Z",
  "key17": "2duSdgNZTtAkeLqks4sZ2KUnUe5hG41j4zUDoa3ZFzzeLE2b53X8MuHWarzF2gS8LVim49dF7UkcDLPaR7ndWWP6",
  "key18": "5z6urHUZF1HcAawmveUMT9dqk6vSVn3p9xoeNsrDBUtgkGATAU88FcmFX7wyz5X1vGFLo2mrr8ivADKbQ5kD4Y8Z",
  "key19": "5Dw6gj8nFQ5jzE3KWrhRNCD21k6gmJ6hyZa8MUE6vH4wze15CJwcMqpwCnWiaAWzKMgiXbtkaVN6hbBvX82TTeoX",
  "key20": "21QVDG7UXJjTLxQLeBj3K19QK8czvqQzcvMPeX9hBnth1Q81WNiLszGKNbmqYFpzgLzYYdVZiyDNqqFG9Q6fwJjw",
  "key21": "2Gt8op3zQNyd8Wd2axnTHv4AQ6jniwUkGMdy34xFgTGwJ81Dm4ZSYanFKmDWACDYM6Rv9mQPn3pqW3rxiocUDs3f",
  "key22": "3H8Qg888xy6ELS3wSx617MQeVWu7wWaWYLoyUEkuPpbQvj7USMMHsU3sN8dVapRMMeqjWSuV2avx9afx2DSdLDwb",
  "key23": "56JemXhwJMPJ68QzNr3VVtDEgWACsPgVVMBKs2W1KXcGn78VNAuSz6L48xRS5E8xzH7hHavAVYKK6ePqr43fWoGj",
  "key24": "5zvEgMUmszSCC1PG8KaH9goVozZfAdepd3TPqDiSfDZXWpjbXqnRoLqq5NC5e1WoPk6FoxjRnwsGzwRKn2os4xSR",
  "key25": "2e4ZfRnTiCH9PQMNgydSUYScuAMeCLhC74gLcZVon233GoqHj91gq5aEEuq6nenbjrkU38G45D18q7fphMgAVtMv",
  "key26": "3T5tRDqfcGgmsPntXYQmZdB7otM1BUpkdxdatN1BBMjm3cGfp8mmc8rsWi8ogxZP1raND92QN5vF9NXupWzzDjyC"
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
