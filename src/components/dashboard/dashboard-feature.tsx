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
    "H19KKudT7TR4yv9VVhXFA3TyoM3RXhS3mK1v1UooJh5drzco5rTJy4P6mJY8bi77di6t3hueQmuRBLKjH6dLUR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S6GuryiUXhNrMaEaSqj38cUgp2WiE4H642B7qffJE9ziZShgW4yEBtyN62WYHtTKpuDeNNJvvDuvaMY2gF4tPV3",
  "key1": "4SR1oq1Fh9N4YRZ2dkRMkHtDrwSPES6ZtoYPbytCQ7FoqoX7iEtTtCkEtJvNxY7hvrchyULiCJv7w8zpWM2jKzwN",
  "key2": "J7GXHae7V4i5gp3L5ageKbb3KRraVFuGSWncGcWYDB1j29J12CeqwMQECGpQ1J977DNa5sjMreuszxxhzNtkyMq",
  "key3": "cT19YS5o1xbFc3SjwcVSwV5j8rPRLE8TyKytA3tatSPjGzaq4BT1TVn2otM2LfvEQGjEiQgXmr74JxJdcgBD3eW",
  "key4": "52wM1ZTTDJAYURw6k5PeVjQ9uWTKUmFhrZfBaEL2zUC6HGeRUPNGZz5YYZGh6pBMM6gbQB1Crq9cueKMUjT8Fqin",
  "key5": "2gbftamGZJqPJddxSpbbvxs2Lka59mDEAEDWm8mAtLcEZSqMtyaM1cugud78DrrGYvGcoENeowTwALfbUQ4tjTCA",
  "key6": "4MHhkQijbbvqaskALttek44Z7Jy3icJjSs6ZXdoyZfmYkHBzeCQKnHQTtHTXD1kVNFhP5fhVq9nFViDpqHQJsWmF",
  "key7": "2a9odJ5AhW1VdCof7UssDBEceecapkTAj7WB9NeegHdwjo5LrehoReTHwquh1bRL9LuboBUwbtPZuhTn2pAc1wDM",
  "key8": "2gNsYDVamnEkbHm6EjW4rTdv1kBWRLBcZPruHEwcjLieHPcvCqiCEnwrgHFVTiBdM9nQP6r97wkvHehxWhCsF8pG",
  "key9": "3u7SQhV2V5EhHV14aQeDazgfJyzJvdBU8sByMzDwo2kq14dvKK8smj9x1kMFRb15x246hq7BjfB25kC6oDVrxxMe",
  "key10": "42ZfSw9sFtjkcHZRjwMbchPwVm7BDKDrBbSkhToscG2gE32QobL1UeVuRJsn6eH3TCVJxZAkPu1viBsZZuxik5Sx",
  "key11": "2bNE5YA3bWwzHmQuMxqfNbywa9R8PQv978BndHyWTC1sXE5YBnTotoNHRR8YC444sqp1y7FZkeYAk63fb5TcnpgX",
  "key12": "2rJoxHKaxP1FtXxe61czDEGqykY3pCD5ew99iRq5nZXjvArq8ALLcmAhjWAXX7kR7bFmu6amDYBedPZKYpeaE8F3",
  "key13": "34ACXQAfjtNqSqTh6mh6uW3rbS9ve58EnBJBeRx82MoHndktexWvmZ6GfiLn7WBERfk73HbY17wj14nizcN9Njrv",
  "key14": "5TbuVuA1of1RAMaS8on731auTvCCqwRBbEdCB8xkf3nXgUkgxB5ccaKr7WwCqypZWxtQVhmo18dmLTW7VaRmXDiE",
  "key15": "212pLgXsQneYmqCWxkRoDrasjF1A9KZxmMZ5vDeRSjrPmvMoJvTFtHayf4sQPViSK5k5LUAQzMRkL3TKT5YdLhuW",
  "key16": "GPyURGJjgcAfHAQaVva6Tedd9M7RRT3MggYcFPbpYLHEhbdZPPPtqAUvZdjsMkJMAa3yGwSt6foZGbq7okc1Zpn",
  "key17": "3nt9KCLfuTnfJTuQQqjXaZxiy7FYGuBegACERoPM55zGjVmmpXEbtGCjpmqBhWexhpRXw5FJekyG2p59c8WRAFyL",
  "key18": "2uDfXHpS5ZQgWb4PdbiSTouJx7jcfqrXSjMJJAK4emwPMgiLXJJGNX2pVTeRWsmNfGm7LzboNzacqS3umC6S1zcL",
  "key19": "3BmfA1QByaPYYxsNn3FLZRtuF1ADob2C5v85uURzXEnPhyA1NmVcWyfJrkvLfiCUnZunoPiL4h3N3rtD4khBUtWt",
  "key20": "3w21huWdngQNU72QQWKLGRYcecvhcf7DDSWmQjK8yhzgZkryHwPsYNGAomnXVYFhhFJNRj6kwwx7DguwVNCti2xd",
  "key21": "21jEaNCZQZqwUVrGFpjQFBUbQ8wZbDyRj9pYgM4eveKX39XmWwzKKGTxq2tum2RBsU9qAYEfeuTL4QzYhGq1KxsQ",
  "key22": "4WLTJ7vSeiXixsn6XJzVggePgrKXETVWTRRVQcqqXJQ9AytG62C4qVKUqfetkcraVmhkkjr854FUaZYqi7wS4f1C",
  "key23": "2uYGFuV1vm7ecrKjMhEgaMTFix47d1CS1mg7pHwBibSLCsXPiBV6gRLvVmMGqjcHmkSfPQzAWDJF2DcWeiAF63uh",
  "key24": "2zdWmhqbz6MugWM3BxhMFqWb5eP4BekPb2bp53iC8XEqP85gFCYYGoEyHgB1L1JQMKeWBQh5Dz4bqhXWfMy2MaHd",
  "key25": "4LHyog7gKYtk3vKkjZZu7HAfug1Rt3DYnXVe6SWcBgbuN7opKM5vLE43v66M51BVS11feF7Ruok4yEiRJdE3r9dM",
  "key26": "2qK1xFQeJt5dph6oKeFJZRpG3YEAhS27ivZNAvHjWaM8pyz457QKSNF9QEQkzCVWVX8ANGHnAmsF5nFEzgvGhKFw",
  "key27": "2yjrTkEgwKFicLny73mhGmPMVPSEad3bfotNqpYMW4QxqnK3pc4UmTmhWQa9nnCPu26ce42vfjkNTjcir7amnBfc",
  "key28": "2poSAgHN53SMbAMCBCDLWkYSnwkXYZBJ9jGVLkKAjHFG8aSFdqr7h3UQJi8w7AWXMirZJ443fNGeoreFH2UJVDpm",
  "key29": "4K4j942WQrQopAXS1MLVmmvNKG6SfuoEMRzxqzvcXtERpZ1fFCvav4Hk48DLhBXUJFra8EywQxEjhn2J3Dn75FSS"
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
