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
    "3enkmKyC6aiTvtF64VTPsiwGAPMzVZ5Hjh2BMhdJH6XMhBbmgXhBY2Gs1j9J8pahMNN4z4kjJkCJLJmM4auLWpxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTuc626gjsTHJPyymPSmvAFzVdXMeDmDoRUvEVzMroRSY7wJWvJ3YgCqKhkWwHLv8kzrze4J2uziHv2EMvJPSQ",
  "key1": "52JTX9ieJzdxGwr6uZmojcvUabEd2vNBw5HFLHU4sX3nkHWfD3goov2bxYpm3GeAVRrnQg4TiRzoSx2w5MNDdCjH",
  "key2": "5xdtRwGvrgLqNRRy9krQBg5sxBDrLjgESZBr26ZFTusRBkcZKWqDym4hFqCWjxeYV3rEUEprM6xfaSnmussJ5C59",
  "key3": "2xQHZPwURsR3nib4N22FtuWctuSCWQ5fnLsMNgG84hRHWW2BFd1zSMq1dmQKS7osZLvMvHMrP1SAsH3752o7P9Pk",
  "key4": "4okQCemK3mgj7vwUTRJZjcgC4A9dvUVwos4Wh3K7b9Ei2ZJa9sRta4b6HxR96y5czUADmsWZrYrWxAZpA7wpUX2q",
  "key5": "2yJhpg6hTDMfRXbgJLWh6SHxaWiDKAs4WkjbpLeXXQaCo1QdeU8knosLRRogwEZcdapV7nsxhVugdFK3mkuiHCrG",
  "key6": "2JwsiotUjpQQmvhVu2tTS1AVa1KgL6ZmjQXFbnJBhZcttzM2eDADDUEbHTfgoDLmicWWQxV7SBn8WyrMrWxK8sbD",
  "key7": "2iBsJmyAWuK2esJJkvV9aFPsEw6qSyma1qSAGMUEoU6hQbRxRv7fNsiowbWDzAtZtEwd9LAaTqnQzrKdpbnU4wyP",
  "key8": "5gJPnAjGPcWiXvsSgYq3qVtAHvzezWNEsmaSUpFtk7wQp1YnQULU5t8o39qXpc3F6qQhE3LwCVJt52cH4tjcvSYV",
  "key9": "56CXerikuFNDra4KzodjfDu7aH6xyXdDrVYYcMGYsQ33uCqFM7gqPZsZbsWuVofYa3rzUoNBRZtCfjk1iz3XpiDi",
  "key10": "33GToFxY4dA3a53ecU9ERuZ2waJ4WT1HqvJwRUF6ygrZzv9x5Vfx7VUtCDnxGn989BdMvv78xAacjbnEjiMcUwq7",
  "key11": "44JDepSFD2Pcr72kkLjg89RP7ZnRhwXyCuu27yrgBzcHmXZvH8Kmjh5yyZFgXHeQZySqouw3G5hZofQPBgqkmZst",
  "key12": "3AsTv4cgqagN9GrsvncpWVpDXVC3QM7ESpcQgYSRCjFUDbAgEoLxjVumGduV3ZgQgJuN23eLQnrsYxWPMxEqycrA",
  "key13": "53zuUTJBuwhxAEVkK2wkjFg5k9R2cmnHJAL4jmXc2ezpeYdXxk6ibdwEzqvRLF6Rz7LzpRAq6F7TvZHai2FHQR1W",
  "key14": "DoJRDsZSNbrJXK8G4j5RuBWNf82gscgta9y5yr9j9cvxyNgzD1FSkonuWTmTmAoLnZqsrCoLb4zSj8w3Ko1ncVG",
  "key15": "641bJ2Z4M3ugEkXA4duZMPo2JLtDWnWEhbp8hSezi6ggCKv5vxWbmGFrsHZEzA7KvBdgoVB3L3iarCMzbCpYEK8X",
  "key16": "FcU9B9jBoyDpgpXi43JiSBhqZDaUb9zxamwMkpLWj8qqfYzTZPsKcQp1nUNgmb6Pt1tC7EGYCyjTeLWQ6LGg7u8",
  "key17": "31hkJ6g4qeE3Ahw6ffSziLZSPihhCHMgN6apbUpR7HX26osRPHb3VnEoM1npG3sr3k4WsvfmKn8eSpGcbmHSi8du",
  "key18": "phgyvDQ5pFcxpZK9dsuC687ewLn1Pgi8cDUyQJHNJwjGpygX55td7yqmJSmdx34GqwkkPwimqJE1hq9L2n4LcrS",
  "key19": "2T2p4wrxoiezau4bJb38vcGPhqwfaJdCgx7Z4EPG6Y2gQtFfb1S5CX94YHYFHry3EoyFnE8Z7QBiP6oKCKgA6kxq",
  "key20": "5j2nT2TKdncmjTkQLD2fewCGs1KmrWecrBgFEexjfQRw3ZxmbGBzBvgsuBsKn1ktveaKdy1rfbC2BA8MCE82qTuR",
  "key21": "FzjezSXGSLxPtUDJXgbUTfnn7p55rsZFUNsrfvKqk1n1DR6URXdiuDKdvSjdd8JebqTQmw9WD9h2SY3FBpc4MCW",
  "key22": "3wShAbzZaY5RcMFNMoqaTNoyxTHAarjNGkav979NtVHrKu4UFzMXCyhLrX2zQf7n3QEvGXfV4MZUqA6LAwpmuxkZ",
  "key23": "3aNoMyhNqUD5DAEUhGbLzEBAGZKQm322RrzEiohrRPK7HjDrEYn12186GWNxnjBRYYXQRL8PQmY5hqTLUrXsagJa",
  "key24": "npZk26QM8vUnBzATVqyrRwCyTAFiCNiKydALtq5GsEr3wDmhKN9cWVBxpURX3fx57PNo69MSGPRD3dyXtukYTyF"
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
