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
    "2awmAzHapgEnL2VDkcnnRNukXhWBYPYoAnQJaAerNAh2FDRzG99uy6FaHJ6Sgsi56us3GVPumn1BVahd4eMMKuHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625YoKHioBFHcdxJSXGyfgBVLLNf1L8hKYPXJmVEjQA35Na6mCTiBE3cHb2s4pxVWgnsNZPra6Yo74uG4XFPYm5N",
  "key1": "58URAZwKFGoRWwJtf25T7YteW6bZRvDmq8MpB6TQkcw3FHZQ6idtv7668q5XBVeDEkNcqoUVC5mySkd5UTq6vH11",
  "key2": "41PS1oakTk8aAiKqBsZ876ULLVxC3HsZLHLJRxurwpdo3FThd4ZS6vvo6pCXRXydRCGRWiaw3dZ8WJTLicSvKdvE",
  "key3": "4xiqRCtj7YW8X46RymSmoCfWZe6zv1GFFva2kuhncWHurnNXZ26wbCAS3rjacZ74KRDRohoQExsBb9UuSTkXR5Bk",
  "key4": "5m7NNAzAxYRCw1dDAdVTEXMD7ZwDRwFipeMEAr1cBJeQYDs9Kw5W8y8DoHhBAh3J48F3NmkcuDnHmVVpiWambkZR",
  "key5": "2uDdpGua1VcngRssEe2fPPpgo1gDJMGWkH4Vx61VMBiLjpoSc5tjq1wymzeYzYXrMz1BCrKhc12h3mdeUThEwbXY",
  "key6": "BjANce2ahfi6Yd9J83DqyqTMzznCLodzAo1Z64hvaKdEhkVKQMS9VV4hqygyvbn6Ch3FMLnrxPH1AgW63ASmYnH",
  "key7": "44CwbVdXqAmRn6CERgJ1vnDJvNXF84CaU6gcfu2u1M9hNoGqK18ey333BfkfEqwM1raE6bewFHggXKTVFivHHAz6",
  "key8": "2RKm6Zk4pwhX19cmV9mpoaxbMkWfL474WF4m4wePsMu4G7f4HbxTigG89B6jqozgHkEoFUQu9RXvpmMasqmw9hQJ",
  "key9": "Vu6F86i3YZbptqtEa2qU2D9zS1PoFUK2GQ5zWGAcYF1gS7VqTnrwXMgL8LS8imjYYVxWWeEfYR56Zw9o1RyoDTC",
  "key10": "3DMYps9xu37WP2McCUVu5cahcsXu68w5D8P8r8TzsFFTX2j2euxcB95SyifWu2V8XNjh92ExxdKrqSdvMvXUtm6i",
  "key11": "31zEaF5aZFcZgzUWx9cVHiuTGBLH7jDBEmai3SCb5anWV4KP3shH7heNpCVZK7FzwjeuitU7PapQ6R8HJ7rtgspo",
  "key12": "2Uq5m7Qjysh5tm4ahv8S6DcUUCTai68AsSYZSV4ARhwDCYG4BK12PtNdECgnPFuJsivoN8qUB9kSJobSKPwoLbNK",
  "key13": "4TZsNHQM8jrA8UDfaTmvchVgtJd9QQKKJLyP2RWEZQc9hfPUCCLp7kywfdnjBdR8mwRpTZYDpznVJHEDGTyrTD4A",
  "key14": "4sSkPDvEkQ2GcJeVXocxmGGcAzN2qKLNmPgN8Qg4DBf9n2b2kLwCmGn5Y7e7raoxjTuhciLqW1wJNS359faYsmc9",
  "key15": "4YEYXkh7mwQ1gmp76C8Ea9M8MjoFJ3K23yEGNiDmErWcy9ykCENmHNRP7AScUwPj8a7DADt7rmPGRtcGkRPgzCVr",
  "key16": "5ACZeMhGk21UAwHpXyQeAR5Eo7J8Mts7Lu19A5TbD96Sv57Z1CqMBdcMc1ch6PrXdrkccXYD71txL3qyeEHzEQvx",
  "key17": "2MYaCq62y8PqjkWurMonrHGiNQcpbY9jN5YEv3yKbaHfsnmptC1SAgGXUd73rwzLLwk1rgmcCbvrGyQ28a77qnAx",
  "key18": "yTEPRLK1ReVdZ9Y8EbSDAfMwd9sJ2kFhcRq9NWKpNo1hk4q751ePodETbfM3doMUHQDiachpfWPn2vKbtmin2CJ",
  "key19": "52zrvvkZb7tUFJhiU8ZysUPdczhiEBshmc1CA4XtHdja9pb2F23y2TbPNbTqffb2seQ5U2zHav1a8xk6zJy2rxwQ",
  "key20": "5QSNND6MtiL9RKPzwonwaoq7buDRju4D5t5VmhULe23vzKW8MWWu6xiGX27LhSAcsZS9B1k4P1Eh1Ykr6vvVnYum",
  "key21": "43HF2D1h3XfGYkh1MxGNVjJk8ofQNGDYKFmBhmULeqzGjLdg6KK94RFE2i7J7vRK6mm6er1kbQ8uexQFqPB2AtRp",
  "key22": "5VCsgdMruJKDac3yzT4u2jmZvpC9EpsnGSLNsmCcprmUFrxmYA1NDP1pPTfeLPnA9xQCbbFt7nMtdGdgxJKsFQpr",
  "key23": "3rSuJGWwAuBsy3iq9gntT1cbUC7FzHCdEFNWDTm8C2UWaL2s51b965WrPMNxH4jdcEoBxrsgvGwKL5JvxwnZ1TBo",
  "key24": "2bYsJkXtmub7mnuGPXrvTGhaotcD5nXgmozKnKnxzwFW8sDDWwm9npe9KCV5SxbD5sfaGZi9a4VQs7RUKnj6b6X2",
  "key25": "5Qje2qUccx3YWztpVxEofQyQ9Htt8kHGDikSiATXMutLS8GXDjr5VL9nixYv1jjKAEWzcf74mnQm7hfhpChFKfQQ"
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
