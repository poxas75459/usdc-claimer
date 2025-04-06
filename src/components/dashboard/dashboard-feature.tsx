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
    "2XkS1cH9BGJ2G4mUNvWSHP6DPsScXMuNP8encrfgTR4Mz7QvD17AGciYdisp8FHDRASBy8NVETaN5rRk5ndnHGj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFcyhAT8SJZjQwPGh2vtamSxkD51cfstQ6DaV5EgvsZgmpZAdSPgzYJaK5QPBVC3dxekSAN3utbsX4yhUfazcGr",
  "key1": "X5rzDvY2shRPdCfjFHFmXCcjQ4FoioHFjN7PYoUeduQTJYZQKFQEtg6HMTjpxymmGYbGCgeYb3wM6PLfQGJbqZ7",
  "key2": "2J4MKYieZcp8Bz1GcauTD7PoXq1EvFznCrTh7XD22fcphzMYU4b5TV35WJPGMAiyBJ7j6hk8Uv9y2AMbfvLBf5gJ",
  "key3": "3Voz9ZpFcxbp5fbGaxPbB3HFcTrP7ADjyPnkWCnYamccooBBCUeF8zgJGd6RTXgdCBPEasnAUcM1Qdi3jQWJAJHE",
  "key4": "4Vjbx1dBGvm91SN7d6ByR1LcviswSKcGASnswYXMEexvZrkJJV4knYBgxPYed9wnwK5H29LPHKhiCMPRYyNvVjeg",
  "key5": "4MXMcpghUKSLK5zoY5ALo4egeU5jRBGen4YBxxFBRPFMcZzFxX83yJcAfkoubwXoHJfffA4RpzfAz5hNKUsAu79W",
  "key6": "4eNAnz5ob99c47vEwDNXRBLHna5UV14pYsYu8U8uyhRkxJ2zQ9vzB2kHTWYsUXhFBqfrZ9DFP2j7NBU3G3AzDuXJ",
  "key7": "2tgtHYnG8tPsEtKwUCyy8jeakDfHNEUmMrXWrYmzVdAwnkrAzLTiHRtn6U75AWrxBwKik7NSqZkCyJUejZ8feTop",
  "key8": "5eqbzESXZxkt3g9jydYf1dG8L6JZCmyFo5JgWNR9Lv7mrVpzDxREXT8wo3iATSM1FAs9iSS9qNyfB47rMuVb8eHM",
  "key9": "3J7iZVchTVJGBKSTPfAveRZ839s2fsZ9xhSXAMHkLXntC4uFRMGHHt15wBhfuMCoWEUaWZN7njowm4USfz7ppYaU",
  "key10": "2R5Mz43wGV4t7EQngUy5hAzSusmxyG8BRAjhf8RLRvTSFGNHRCAZWdZcSUZwaZnzbMoCG6vuy5NQE466bNfwMUhh",
  "key11": "22aud3UQJMAhRXDsfWMcGLwxc2e882x6HnG8eej7U8rPzQvxtZ6jLAYVbAMdVRp9QCZcf7KSWan2KH37d5meNaaM",
  "key12": "2r8nu4AJaFQTecmiM1FYyhKyCR42SjEcnu7LsyA34XFhNFy3etSu5pMdAVtLurcoE3K2KN6dEfzdvxFHefFG8r7d",
  "key13": "3d2cQvcGD1pLtU7nnVKpsvxy6MVMqSRSMuLKLKcQyanszKNMVZLSunVUs9xhBLmr6gNWyC4CYmrXqzQT9PzeksqM",
  "key14": "2CpQfynva7csw4Z4uZM2nMBdjNxVEazPDru5dufRWXPFx3gref8gp1oPWfAJfk53TrNDjBxnVbxGFqTBSNhtqkTy",
  "key15": "2kgRjP1VvGVqDzXZhyJcnimVzZ1UvscuQgyt5HqhfrYX8vzFsy16b1f16jtDEvwszVouWzpdM5E47RcYkzVBNqNa",
  "key16": "sDdVGpqoRmLKVvXxVK9fsTPNQgACU3mjcRFAkk4v8UjUcHw83gLPeXp4Ebrx7WrLiZpEmEhou29Yaa8ME2v7ScU",
  "key17": "5kq2dW9ULTt7YH2kFAkVH8a5wyPxVX5sw4i25sYSQrjYhTWTKkuoyd1tLcJLJma9bMNEHym18SfwB4TFQjydcVYP",
  "key18": "4hamT9gVzdyPeA9CYu9pu2RqGtfx4ogJaeAVNSC5RVv2vhRh7cmCm1yVarKSWMwQXYF59EVJmy2oGAJ9XMjpmCqn",
  "key19": "41ufUpeF8EEeYHT64kZ6HXmYdGwacCWzsvHxHCyetxsHmX3LiJuHpe5ZCWsLrhRfdagLFennDufcbGS5mg2JpuSG",
  "key20": "4sVeK1nU8VU1HKAtFuorv4TRysnEorFa4jhFYY5trg3tEkZvrmUBfMsfkyrNsmsHksNzP8DnnJbbZ3JtDeZtsxGS",
  "key21": "4aMkFDCmioRVKzZUoHQ8npTdcvw7unQEhyfmd2Uz6JvrUiSeckxG668v93NAwdWLNUmL99N5TGZCXytoGUuhnJGE",
  "key22": "DYq777FvZqaN6VhQZzSJ3pyPamw68zQ2ERzYUi8PK8MUNKVaUFsaWwBYuuifXq5TYYN5QeahcgqFzDTsjfbTkLW",
  "key23": "b6XR5R7756dEATfmmmvnGmp597g5G6FE7PuWeKomy5R7pD5TwSFvpMkvxgxvcQFd3eh8BaSC78AZcqMxvZZGkJu",
  "key24": "3Cdv1i3mvHQLbuprpVB1expmKbfY6UszGVTmS8inWap1J8VTnbpDde4SBKN1McpE28X5FvmX9ePXftphRgewq65F",
  "key25": "2LanXaTKFS1UiKjasjy8a68i9Bw4wsX8n3LQvXENqZgHxvGExGsyW1WPf2DxY5U5HS9xTmK1ee83afzwHt8pNTgm",
  "key26": "5q5LZozxi8Zxy7uNLqhsnDXrGpsWLcv63czbBE73hXi7y97TDiwmdzto8ApN7oqatoq4mWA7j62D6JV1iwWVaaRe",
  "key27": "27Lbxr6br6Qt1Xwnc9P8bR9BwZ6RcFkKhFvaphRtYRnfJQ9GzLTLshKXtKcbysVzKHcbuMtKjWaNpwMYB1o4ewar",
  "key28": "5remJ3mHf2fy6BQmc13GpQZyYAEZEekJ8Ys4NoiGqwL8dX938UVSSt412TdRU8xHWU9At4t9n1JfvQLt64LmZVkp"
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
