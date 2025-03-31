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
    "34vQqCUttdwgjhuRERXezD8GN8USEto7zHxWYH2vHL9j4aZPUXKgEfHENvMTvQLfJWkRKpvdtNnTAudGfZ4zoN3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZH61TgxeSuPGryswtaxKUdmzQKLYMFC3szMekmaJc1DuzrkVvKtx5Zsx98FE8qtiZKMJHhLeLL91MseRcvLSsWy",
  "key1": "iQgta5N2GpSizD2hsUJuGKPn8QKfGUgNpeyRLNqQjbBH7mS5pKAoEybCjiCAawTJcy5WwfdgHeR1WCoZ3KarhJv",
  "key2": "3g7xBwuD9i4MaUVAH42WR3vJLj81UzvuRf4ZXVKkGppJi9NA1xLS96U1dagYmUwTXxcuZ193NE6CDKTiFpzpeqUV",
  "key3": "3GPzEQCnruuaxrgNHtZhdAf4kLPTjY31fGR5JAgvtu1yPhFQDzGaJVZAMkSLZSZUQGfMRfwEf9MvDhBxX6iVwzzq",
  "key4": "2KBLJ17wzwN118tedYN8Jhu3obKqfPMM8GVgBdE577NGKzvZyUNU1t8rykGZS3CWHcSe2achYHteoADjndecad7r",
  "key5": "49jfz4m61JA2YekRpdrNnZKPCnstXy3MbfEeNBFCch7pqVz2s6WjxkPJwQjHXgqDJVfJvYH3MNj7icYKZwUncv8V",
  "key6": "3eNKb5LwV96juDLeuazVXjwqBP3K98wt9Pk4ZfV7aR1VUJ5HCp2mSZRLqNJhsFPVnV4aJh9N5TQLMbsKpj4eGvsT",
  "key7": "2gNRkTcZRtMGiMFSWfmxmBPLA2qG2AfYGuDGKvAZuPJ2Pm1mqMBHCwYZubHs2jWUGRwdLrJgztSZaLKrrMSZu7aJ",
  "key8": "3Whwut7uumeJE7Ss47ebv9KnMYnMKWbJby9qd6U9mg6JeMzAxxJwmF619yjooibAM8naunWymNPiFDSGKMfHGwo6",
  "key9": "29Sh4SdeBV9pnYETuDGdjiah9maxC6rJBqMet21tBeEhLWBVPHjty9mpSZbUk6msnGW2ecY4BYVP8DBn7QDufmhr",
  "key10": "4fUCoFDtsbzZDFQg82r87DCXmaam7ya5K9UhKQQkmwcPruKmKJeXejReCEX6vCr1KiesVMzoEBADEUQaao796Nup",
  "key11": "3ArrqjTJXXR7kDfyr4696NGXYMhU2ZTKaVv9JDi9PTBXCRAvqpo7dAH7ziPuTXqe2dP9bwVroUp4nJDfyRq1yKnE",
  "key12": "3Ph5ogn6HQxypq9n1uGJzw81sfE73v2GKyjygiYNqKRxVmrEgckQuohohV9bu4StiZTzn2Q2ygyh7gJXj167jumk",
  "key13": "5UamWF7WKA2Nw4iYYRUGFVdyjwL3SthGVkcw5ghHPDofkgeRDDvdxs3omcUVgG7iaSR9hz3NZjMiFFr8fFtKTATu",
  "key14": "4JHVKErPbKqB5AFHeq1Rj19T33psLx4wjBEBDaam6ZLUMzGsorB4Ur71eCMDRzk1CCVzJWg6HBHEKtgCG1Cia174",
  "key15": "2yauZPPS36NQ7RX6qXVGrJA8QgD8wyWsbNHfGQBroNREcbmjBCig4XS3BjiADR19UdGnY9xEGugUfkiiPSbeuFRg",
  "key16": "vcXsX25otTUuKDFt9xQMv9oDUWr9aLrBvANK8ci3ZPegra9GF1saEVAhrKWRkiW571wPimQW7ZQLRLALFjMmjtF",
  "key17": "28gMPnW8qDKPCXUpvNibXVRh6aVX6GRygTpjBcrrKpyH4yh3oyxZ5GwjLYRYJuqF81PwEcZ8FPUFHiM8bajyufm5",
  "key18": "45MiFadeyST9ze84fLkkCe7Zfay7Wz7XGyraPCa8xkrGmUbphwWnsxNCkParn576EoWXQkXTprcUv9LXLEeNAQi3",
  "key19": "3cwsVgdAR85Lj9NxWWUj7YMkA77NShAgFBziEyGLsrJz1RySVN4QLVmiqpbZwf1aTnUewZuxZ5Pj6AcLXCCmUjP4",
  "key20": "59EvJkVaVGCKtkEoRr4vHafDxxuo996RQqM4WDicj6k39ZJRtsF7SZitoRwWQnm4vwgLYrnEmitogT7k58QWT2PW",
  "key21": "2qoHJSW6HrSEScs8785L39nzYuqBkgXj168hYQSCThtQ2ZkTK9C7fLY9jzS4mti1w73gcptfGm7DvNHXEgjf4thp",
  "key22": "T3Fm9ZrdssSyGm4GDaBwYpCogaRL7spGCg7pU4i4z6CEu5HPt7NkzkbZGrDVdfSTWReKa9tPRPsjcJuUjYL3d11",
  "key23": "4yNKiWc5owSiw7YxyofPtsEwbdz546vuyQakzsmhrzNBismkA5BC9ikNm766xtPGe4c4rVpmKkgRm4mUnKR4F2EK",
  "key24": "39FyB6KyWKE4v9ctMRqN23c6vZnTSEopKLGU9rqpHJZmLuz8D1BNWKsqzPeajKLA7qsPsu9YjXVxRW8vvzgnqrjC",
  "key25": "sZ1QwB2evfCx7PrH7BJi2VBwgV4BfwEWgyrotCrTgRFtuQ1YLwxbNfxo7xBGVU3QjbosQ41A16YUT2RLDtKyEjd",
  "key26": "5X3qSAkVQFFfnEFXGY4N7oLQNtHqNWEz3Xf4PH9umQQiR9nQQEMJdWi6zrgRmpkrmrXcKFWTeJLndBrJyukNtKdr"
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
