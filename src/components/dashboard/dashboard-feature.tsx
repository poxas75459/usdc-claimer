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
    "5cTyh41sDpmyAwhrHx5YM3yW7fAgajS4T11ecv3Tvwi5ja5nrxFhgBVvJDm6oWbMUH42SgX6GCtmdMtw1doxfyFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sX6a1EW3MJpUSVbe2HK15aJTM4TjaRRENama2AQUpjPvsP9E1G3C5asHN5sM2J74GX1qDPWpdZ2694FfmC1nDut",
  "key1": "3kX2oC25Vs4SjsPnFoNpmt27zCPbbApjjfWGkUKHHkwi7FvwgWpHXF2Yd9QAVbmJdzotyvtqqUf5FFhGDaSjBC4Z",
  "key2": "4ZdaiTur6NKPeeCBgofy2WCX2baRbqpTPsJqD5gtMwukPQHSDuEFnK2mad1VNugCpTYd8nMTkUKqGiUNB3FvqKh1",
  "key3": "2Rjmt7cZteqymaU52ncRbvZSK4HqVsZZYaM52bbcD6TfkgpEG5SSEjZfcEHEF5pmsoHFkgp1roMLcRkbox3fzHsW",
  "key4": "3wecnXTxzZTYJku4JVtbP4U5emLNcxMELBV7qkNfRaDix1dy6F42dxWEAAdAQE4gvP1dJwxu4U9MhJUf6Esd9RTL",
  "key5": "5EcYjUpspchdgb8dJeqCFbVx2iwwxBakYtNBYZ6Coz7s1fPZDk6VrxgtGwU3hH7xeP3o4sm7eh2XQduJiuhcPSG8",
  "key6": "5mUm6oJBk7XTSoqov2BJETTP26jJKsbYmu64oCHeBYN7utnvj9ozUHCb2w43qRBHZA8ggKEJqUMA5qt82z6cQ5uJ",
  "key7": "uQyhyHJ4RDR7recgyNqhpzhhHwJ6boS3CKdfKXHy8qPmy662FfFLhAXJfS4yFZBh4GPXU3BGNj88GENFBCi8hn8",
  "key8": "tBybCebptJxphujjvzNevLkbeshYRDbQg73VjGortZ1Sti5WFMCwTLAfo1mZMcGTZQS1NeWx9htZ9b8AnkqAzrh",
  "key9": "3TfzG6r114dcGePDz5ZNc1tmCY881ghsuKLJ8bNSTxNsMtCc3TXE2JhDWjfWyjVDocaWvAkhu1DuCkm6yduTVuv1",
  "key10": "3jNJXFcZLHCVdk5incnPheekDd9Y7XaBMTP9aevQCXU2hk1MdXo2rFSfbX41jbRV3f9tAroxV1dXR8acdb5HXxRh",
  "key11": "4NzycA1iAAZDHRkvjKz4MvRfYF7jMiVG9DTZy7BuHVyFhCNpcCHmyBUbdr7JQxFx4oYvzcZTE1dXXSefdSB56xU9",
  "key12": "2Ayqi7oBZYyqrR12zo3cFyD4dBjiD5Si1aaAMVdqcgz4BPRxV15kUeBd91DF6JxuxKTstSr7WqbV2msJKWj568uy",
  "key13": "4kuPYzR3Y7Es1vZeMqcGr8QsXJRLrJ57AaoTKhoEJM6DiPZxpic3fq11mECc5UKRWF99CQfwPE6D9dpsQ1yNb58v",
  "key14": "5WQAYcafBhutT8aedYDg6sXbSMo5vQgCFiyNcQ5CuiU1HfpffqsVAvmixxGi1gnDVPw9rP6DW5MPigwTR7GdHiN8",
  "key15": "2ZoJvqtnjz5oq1WJDJAEgbuYpxS9d5P1mQ5cqy4eaVRvNpbeZYH5TKcRWmjWNd6mDrWSfuYFtDHfQyT7FRVSUraN",
  "key16": "WtkwDqafPmkpC1KunKBAuncpnsgyt42uauFe5htwvcMVtVLAh9UN63iXkJqQCLUYxCMbvCuvcxdkjPnXYLtdp3Q",
  "key17": "3jwBRui7mkgoKJxpo2h64AGVgaaqQMryPhtfxwMrMtDmJDymZCHn4LvHoNTds4ewdudTXMwNYmykh2WmoUNjxmAA",
  "key18": "3aJXVtiGcsaLni6ZvjhuhfNHFhryYLf4fmyqeYJ9rHQwrpEcosaTUcono9xyDqfS8gYwb7JU14BBHyrvhrZWxxZK",
  "key19": "3H77chvUB771Az36GNSbK94d4fPeeh5C2rWinaCzNRX3Q3B63yGGUq6NH6AxFYFPPEZFxPGe4S5ZFZWSJMVnwL42",
  "key20": "3QrLJbMWoa9ymDSMjrCpfSpJLdqxXGgm15Mca6UpzTFqNi4N5V73VuHQubPVuimXFKaKYxPKQn1adhFrZ6GiaSC6",
  "key21": "2mguRekC7ar5Hjx4Y6FBQ7hk5PX73JbfuLwaDf86C1nUSajYv7F7qRXX2V2dgyRL2uLmevZ9BBm5VtehvNoe6PoC",
  "key22": "3bfabEbqB9VTDjGSJNKjn6vkga5w2ETzcE6M2evV7KCwyGx81mtBmeLYksSb9MXCjum8yqQejLwRsNPUPngt9wrY",
  "key23": "3oqTUBtV3fpKwdTkerjejmonwQiBqpcWBPmaJihpeYdJWVD1AxqABH31tsbrFU193M6zXjDSeZLRPtpFhi7wdHij",
  "key24": "4T2RCxGLNV9p1qGzGhHbsqRuJvDnmQRHZMn6PDAuzr59sWVfvESfkcdymnHKaDJoYKX8fx5LwhEygQanRsYQNA8L",
  "key25": "9D1G4LLYa5XbkyhM5RPX5MhSs99MxkbeS3Ax3yfbpkENngR35wY96h47PPTqJ4ZfBsjy3zUSdLyvmD7DcpnUNF3",
  "key26": "5wFwNhTTovLzuEpjiFeoFG4JZV4bNqMY4mpAKB1FBDKRpaw4bBV3om8ifdReWvshbpNC1a6xAdi3zTi9qZE4usun",
  "key27": "5n86zRKZPYBbCb2nWdmW2Hh8ZE7nGupraV9YKEvdYTumTMjU8w4SPHe3CepYd1MzJs52BJadjQeEyauCxRfwQuhn"
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
