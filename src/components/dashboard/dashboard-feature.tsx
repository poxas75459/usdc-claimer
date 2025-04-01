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
    "5HyHGzs4QsyqYXgKcHS77TY5qQZwcktpVGDGwicRqTdWdzsH28S8pntmjkc3xh1UrdEaRw1RAf53oGSaQwVNs7sZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFaACxS9mUFC7jmW54ncGQCEzWHNZhw4h11weTjJ6TvmMLLAUdCvuPSQN2PvbpSaqtaUkfJBrChoiXvNuRLdLCE",
  "key1": "5YCuVTLCRQ9JFB1sabKYceou8kuXKjcrUQj7FwpjXqf4vvvbCGPPYtU9Go6rnyPefSij5sxPjcBkRwbrSnRTsUEB",
  "key2": "4k6qpWHek8RiujUHtTKDykJsnzuefTDcuYhbTFQ7KSTMcgGZ5GgseWey1F2rMPxUg2XFKhTQAYXaJAePwffes4vQ",
  "key3": "51AFSyKaBAPPA8JFadZM1bde7LME49b5nRAJe2szUhrphKKYckeEk8EZz2HdaeL5cjejxjX54UtmFGmdV5A3cZSH",
  "key4": "4V5id56tY935Y64yP1aD7eSpZVQhiZS4ng5y1PQrmUtyomT6hg6sh1eP3n6zqZmuanGKKtirMz7Who7a6MRz8reX",
  "key5": "4uWkcqKHMGKi7WnzWV5ptk5SKQowvcRFnoSRjML2Uqsp4M7WZeXEWeySsVKtoN7F4actLQpdwYNSw9WjKannS3Ak",
  "key6": "2LEzfNnz3EGxdqpksERZQNL8GWXhjdtZWuWhvRJkTPPNtFcAwYs22bnSrWpoPa6ZUHvi5dPFUoKwB9UNqBW7bk8k",
  "key7": "7iQzR6aDvRrsrzeViLK5JmR53sDNZfLom8Lb9euaU1KQ1gEvktu4xFiX11h1gpLi17hnfHMi44waTciDNZ9iWtz",
  "key8": "4sVQ4YNfhChFbbKenSeabCcGQcvqZTAfNdzUmXCaVG8BqqE1yaNepBAWh4R7wuiTCxZH1Kti7Le6sBSdoAqntd8A",
  "key9": "5RAhZDqdCckbTJvQV3BMyPPJVKV3sMP9RMyQ5N7fvsJKuke8gTZ6knLpYhNXwZd2cdxxFgSAq7ojjq6QkVfuvD4C",
  "key10": "2VN4pGofeGgdNwnZNVgVSyP9f1ayYNbfG88XGk9tuSW63mf9mmL9gZzwPZcvyBFapRnYVfgL8AvVoQFP1nv9vDL3",
  "key11": "34Rh7KyiHzysmz9kFVdrMEJ92meRco2Shhu2KCfgivZmc8ByXSNyR4PiGjY7XX2qP3pysMS2VbdGQ3CXbr7GfKPc",
  "key12": "AAffcXNmWo8wyyBc3uk7eJuueiFhDsEv475tqvWNksq8m6qtvgevXMHg1nvnXhrhSPVxsVyTw3mZUMAbLJ3kVKB",
  "key13": "59HrsT7xYgu3W9UzsM3HBbSf7ewJBtunAmw4ph1g3y68VAf9kx5Dop5Lzs7fdBbUrT2u5DhSY5fqaoHLpFDKks9E",
  "key14": "3snK6rjiYH5k5GetNFp3dJ27ddrHsy3Kxak323AW7kTsLWQgb5AFzy3sLyQKNmBPiJAPC9hthR8d8g5dZrSbyLBz",
  "key15": "rofYwTdu71kpHeyNYFGGgNfJVyRAM71j3qkc6Kvod15Y6oiT1eGWNBFyqHRE2qCV7E2ttYq4vPHGRsP38GtNG3L",
  "key16": "4nqt4F5dUQAocT8vDkaewTBiN1v1Xvahb2d65zuhivVPeF346p5RJNxhsQqjamJDCRwJBBnE52dxsneW6iZSwidF",
  "key17": "5TGiQvehvqroBc2hi7RotovhYGdm7DB3JqhXsu8pUKY7bobNkSJG8RJGYd5WNPsY5CUK1GUDueBBCBsUKsk1MwBV",
  "key18": "3LZUJPRrDpyKMzuhXzYmv3KZxvdrcJ9ooDnodqwKQAuS9VSttGATuGXMxfEZiGteYLttk91gEtpG1heNPpgaTidN",
  "key19": "3n5vfJeDcz2R857WKnZ8Tzfee8QDKET1KAcyD85MszbUUdgueVcwJPmuFxDrpZguP6idx9Bceimkkk2swmAzrJat",
  "key20": "3P9vuzi16xSYTAa3NURZEc6c3BE4LRDVDvQQfq22JcrtdiT6NeP6o3PjCS1FU5uPmaAcuhmvxoNuyrVGhELMoEvm",
  "key21": "wrXRN8phRkCkswj1FjLsnyGEPPJdhBykmbKkCgj9GFTLc3vfH8VPQcJ21Gs5BpD53VV1rJ55jCiRfyZbKuzJGrH",
  "key22": "5n6Hy5ptaHTpYUVxFXgeRsmfvLprvvRpMoHJCgS83Ntrw6tK3YEZbkbDqwvwqCWQR2wgbjaoS9w6hPNY2ZTrUn7P",
  "key23": "4cJQkr63dayh5MNfPuygxSdLR3zQEPd7PCEyEzNAgfeG1N5GfKUKYyLZfmjq3QAZjuE5VbSj5XazjDKDzyjbtjxy",
  "key24": "39c3MzLsXiu1kSNaxeR9dxt6BjqcFn6bLKMhj2RrRUDzP99GzSU1A6iZCpVZjhMa3ebeJRBJKpV6UW1VhMaEv29N",
  "key25": "5ob5gqcBU8ckJ5kHKr6V5A6485rzpH7WvMFeZEgvW45cQTSxEhTgUAevxQQjsGKxRNeLZkJgba9iZqQVbK4ZoFV7",
  "key26": "2ATgMJjEWC9g268sjiw1m2KRy5aGCos22TVDLtWbSzazsBkh2MHCFxgdSsVZFrqohc2N1qXU5utrtTWAxF39Bi5j",
  "key27": "3wAMqdrLKUEfDJzJPb3ibSKsFGttzuycYBfH3cxsWU2VpJbe21983SPUbUSC7ACPa6y6YgkJv3jWweqrdEecFgN3",
  "key28": "3Sf5MyAgRnqn5qC7d26aRH79BBfmrjdT5xfzebyCLj9fmmprza9XqWsceZ8ur7oY9EmBLRReyj8ZtLMWu14SJF2B",
  "key29": "HwGaVVx9MNxjdzTPxx2At7vfiaEuCAhHRSjvPHHWPpgioMH9P1RG8Yf7DHj69LWMdRkcncRjjVNrzhUa1S2ooRq",
  "key30": "5Gifv6zbmLB241Ct71ckmuuWq3yrtSmELtnJSXKSgExtANh8egg78RYJgxkyZi8fqTmRnLBeX96sa7DspzoJD2Dq",
  "key31": "4whUZJ7G7fe8eLdC4o7U2xZaERppWdRSyKenxaiJQHR13mbiKFNcTXUz9KFh2XsUvCcgaJTN43B9znsBBTY7m8Rx",
  "key32": "3gPgcDTstLtnS9ss7hvqoyaBjUj4PjvGuaRBR189oGrwFK59bw5LpmQp4UL1d8Q49WUYHxRtuCD3EBJ9kN6sAWfu"
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
