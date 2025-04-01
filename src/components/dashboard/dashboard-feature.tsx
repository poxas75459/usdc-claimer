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
    "3Cvp8ZUvN8dvGHFcwz8RZ54mkYf3L4sEZrdi9WiDD7zJ3qQq5ziWK71bZJ8gQQdygasgtrDMAgVmm5ijEzofZ6NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oc87Ao6RwXLoYP29bmTfaqP4S8x5B2bbAFhr87n3vQeSzbLwLh2izSoHHHw6oWJA3iVMTghepEwC7KQigvxgTJW",
  "key1": "3XMfuXBoVekWFEe8YrvQWG9qU6v4d3knXpqwVxNL2mgvPeeSsEVUywMJM8UwuPE48oFGi1APw7NGkyZeJDD4Lf7e",
  "key2": "dA1tavXu4HbHfRyfX8ekanqT5h1QPG5ykCEAf86g3Ey3UNe7UTqKMjubgisNjUQRVxPV7JFe21YgBi3uTXJrB7z",
  "key3": "4YXbFgmp9m47Kuvig6r1oJZr8THSbjazk6wBGvsN2vjFxP3GCRaihTifp4anpfqNhQnpHxoxcK3bmgnqaMnTDQAx",
  "key4": "5ueW6rwxgoTmpRhAW1vqpJWB9yT4EAoZqYRJU7R1ynbTSJMwpMxMjjvrXcuCt1VnsJxbtkZ5cswVKSudKqqcPAKA",
  "key5": "2kxXR6Dqq8rsHAz7KifkBAWYHvqUAe3uuEjaw59Kdju9XttbjtwUL9ZVMoYFfwHQi64FQX5bADViSkae5y9NopzE",
  "key6": "3ToE6AVQUezeExHnQ9kHMiokBiDVGXxLptxEgbjRiBMh7sp4zLY9tvo2iGo8mz3GHZMLBsfB2wdG9SZmqXqqXPFp",
  "key7": "3E1WYtWGNY87yRDCCy4ESBspf9zpCUsnWMiQ15Dy6wdFqreuAJuAPUJdQuNGFSJp7QtumgDbKQMEty1uWTikBc6o",
  "key8": "3JvjAttTby7pu3JSMkFhCZQJoLKCmf9inRWme4CjRuaaVqo78Xc31cYu77RG4FyqvFMexA3gfTfzb3dagCG3PvSk",
  "key9": "PdgTJhwrnDuTftq7dZjGvkWTj4KucpREd4UYWF6nQAdrmjq3NNXkVL5V15zHELDR6DveScMcrpgE32cF1Mup1Kn",
  "key10": "x3aE2TQPDqEhe33kQ1sso7GjF98qbaZS9v1xAzZVGfdYyvzvGTFsRVYbcvgNmvM17oFTAJ1BYqNgdKPhvWQC1UR",
  "key11": "5bRYp27BRSmc8ptbB19E7BWGu5LaFfxecb7mu2y4zN2UibFek1L3FJsBZ87srTrZUjWBx3kMM75iDRQTaVQ8E2NT",
  "key12": "3preorkL4h9MfgcV33eeZcoGJrphdsp2faE6bHsuvogcJViPdkzqoKG4ajyRS5YVFCEnbPobRHHdTSpDKrjbByTh",
  "key13": "5oTBAGumtLJ5Mvks9wkKvSJdKeNzce8tUfVhKpiuUwSHjwpijJFdZxXfuNu88GDpr6R1MjwDAyK16YaoA22c4K3R",
  "key14": "w6QkdyUHKsRVTsxKtdLENRi9N3dg8jW9p6x9kxPtB3U4FmnFZfmiRkRQMAiEqVAr8xUdsVULALLiwxBxbxPE17k",
  "key15": "VjBqjggEyurvtzCZjjj2dHrL3pGQPkireG9SCXvZZ9NJHjM4twM5KvVXZqhyHcaTbN9hAaWXDzKdnKiaFihxUeV",
  "key16": "VKVPL7hX1Vq9zGgx7WaQQrpRUdiyhS54n1yhoFKSBiNFLFirn56Wa3UaPKyUJgdLhLrypvF2wkQEftYCdVQT3rH",
  "key17": "4xKqv8cqHmCgtPQACfdCm12Nn2mKNf5sEGdaVqvqMQV384sJY6fbV7EUyBntc3dt2wp3fMoGZpNcytaUoLwnKRyv",
  "key18": "4FqYVcaREqL9SQynoVcaFkkdWpukHvPPZP27RYUzHYwUgnft6xgEdKDnR4qy3k2fhfSCTASzNpEoEPnhz3VHr4GL",
  "key19": "4TGdaxHL7m2evUY5HaP5M9VfRo1F6AHVz5c9GKbdtjjhexcNsJ8N9qWGi1shX6Qw9cm4y47FUAHS2LfNcpd5snax",
  "key20": "4mmEq1rfAxjCf3ZQ6N7BY1GUdKdUhqugoz7FhCTeSNznk2d1ToZEujHwWbszebFF3keKSGE5EqjstPwc2buqPy6H",
  "key21": "259QNRF1aTCjLrQ4Txf6pdqLpKdGQ6njGsXNWXVNF58QSppi5N3PTpqYndDqLyCNUuXpTfyVfq3EL4REfouD8Pxw",
  "key22": "4wynstkAiH5aJtvFe8FnHdxvyhUH93zKa4NJrS7ewBX8FAJEi5Ejh2QyFyZqmHGH69w6iCtVNFYRqw7EcWxgceAn",
  "key23": "3hH6khf7NWRyEo1fNnYaRYPt4zduPxwQdC1w9FvecGQuhBHvU3rFJhdX9ZGtBwCVETPTjGBF6tb3zAgu5M2mSjHd",
  "key24": "nBAXjpdFqiX19JmeVPoyaiKXXWZv19ZosCNPhpKUCmSHg1UJULps9Xv26zjXWAeehjWFBgFHJpXTk2kH9x3pay5",
  "key25": "4TDd2Rx86eudHC7uHdWm26FAw9xYNWqdtjCmwWiKnAW1Q1t6gJZbNtpjVrsHkMBy9J3dFZ2kBYZUr6yqPHBupfPe",
  "key26": "59mwZEkiwbJ5GeZZp1DHWAQKsvY5gC5YmeNViYWDPwZjnf94ExNTQ3vE9qUr1ySwVBU35BVmuLXerhA2gaGHRjFG",
  "key27": "2cURKHMSockcEGxXabqBn7dE5xjkfUCvyd8MBPqx1MqY53VuQUq3kJXLT2Unb9KZZFWhC6U35G8wMZZ7AVJHUoFx",
  "key28": "4exzWfR3FXQ43susqzdouv63FRUm7T3R2SHzNZYJNcuRausEUx5nVUfG26zqLs7uT13KWa5JJS7PQwkKCMb89qWY",
  "key29": "4VRv58mT742FFbeTCkn7zqdGCrQSyofsCvpqsGhweB8yVjhuvoU7Qofcv8PPAeHkQoxRg2LZXE9QdUEH7HD4jLNB"
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
