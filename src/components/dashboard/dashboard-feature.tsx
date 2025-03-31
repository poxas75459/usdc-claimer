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
    "4rgEJa8YToTygySkSRJTJa91TMgmduaVdry2iF4NgrmFRaDjg7S8PJXUmmafZHCzRsE1dHXE7AummpTuwJuV2jNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPcueerJfTE9Zv7ARYRyyyUQ5fHauSCpHQsBf2nH7n75qKdWtypccLfCnsfqLzptJ9xZUkPzWT9cxv33TGV2TNx",
  "key1": "3svAQC6tKqBjfXzGyP1z7o9hqEUj5gxra4fh8qktCbaZVT2p4Qn8QgE3VXfVPHkG6576ufRfx2Hpswjp4d2RTM9y",
  "key2": "389PrxSxdiYxrkr236UzpHHMDZeTNFyHoF22QinPPVV9uzq19jvkugKS6GcC9x7BgscvUDHyadzZucPDPyrMsyx7",
  "key3": "5zpUaRNdW7Zovy2iRLLvPYdp7eVAQnjjmbKueQYqnouyR2NvoaxPZBzcPevprvwFLdG8yioWQTcBydaofjBWGF5v",
  "key4": "pUKyRcizzUx1n4zpJvkhpk9a3nYvZR4mdWsx6QKNyB6h5A7qboSwhBS9PMGNMvtJ9ry4WjDUWxjrVtgVA5AB7wu",
  "key5": "PaiQAXEjJXvrHWXc2HxgEMWLtzrQBtJmsBHHeibCjpRAW9xs7xKToNpNxhzuA2d2xtDJX265LN7FrDXq4VrCqYt",
  "key6": "5NPPvDg2MM4fmM2f5p3swimzpsieeE6E1sgSB1VtfcpSdyeaayWi4emF7YiawYSmxDnrSJLnxbiDHGvjX8n6SN9G",
  "key7": "2Z1Yqyg9NotucwgJeJb7TWi5zbRLSd1mbX1dbAj9L135ShGwKSzX7DK5WcYcRBWedxsKnMHQSTMNWNuADTJq2o1K",
  "key8": "4vZEtEt9wfZsCSEmPo8nzBhyQPDiWc6TvtkwcFPJhJFv45vMxh9gHk7RDAF8KA7XwcCgyesKzLuigrhuGSok1jZ7",
  "key9": "3t5YEhRn3u5vjkkDrDwYgqRyR3JGY7vbb2Gmroa5zYbCzG5mmrHQpfVkQWYANKfrY8nBVa3EniBtrpJGP665WmJy",
  "key10": "4Rxkd4YdZijCuXEGsX4DPiXiVyEwEUeTigGcF5EEhyKzYKVYvKJEWwry3SYajEP95ELdho8BPLhPGn3ycc1jn7S1",
  "key11": "5ur6xiGDsmepqxbqnrZxwFYKsXstWvZZXeVGWMsMxinnFHkaoAvsoei9wgaK5tuLKcHsFFWJYskX8p7ReKWQhb4M",
  "key12": "2ByXQgPj7YM1eBMSwEfAP3fePDvKnDz4HpuHmbq9czMYapNwrUN8EWBhiK9gviCmUHsP3omQHdXCKeUDeuwE3Jzn",
  "key13": "5kUEpPjf9sLD1mhd3tKnS6CYBZvExHznwBkR7JTYruayusGRJhW7ehT5kYWMiuhrL1WG2ypxNguZ3Vj41JU6nRPM",
  "key14": "5AVqEZhBFGgFAiZ92AahCF54veMMwhJ7sJcop1JjtG2VG6sV9mQeU5Cdds35nyQ8eZZ77Vb4fNGs8vxhvE3TehPU",
  "key15": "3EWFaJ5pExCVLq8stLDT5CCST4sxBvZXAGqFMe1WjnG2SoPKj86yHBm8SdCEJsx8UdEMGeSG8ba5XQYeTe53WVsU",
  "key16": "67dwnb2VCPgRRzZhEqbRxX1SzAY3jjMbZmPQdt1Wsk2nPUk8njPG5Jy1C4zwGLJ1rNh9BX6BSMofSJspuUCqi9M1",
  "key17": "4BMrpodtjkZwr9EwaKMRrt3qunvGiRsVgGnALfZwSTLDvWDrdgQUUjTbhFVBiJhTBWxZZSYiRsgMvt2pY2Ke43xz",
  "key18": "5eMSuxTrRhURtScaK1YKYwGpSRnrUxckRfWUPr7xSmQqtmn4qEwmgURJqdMt6cP7VYQjhwfne5wBTGgeVTEUkm7B",
  "key19": "2kiEB7w9w18QmX7k7Ya6YFbcDW1aaQRNpgCYW8sxXLhRsabkREf9NiA3ACwgG4iFnS683j4KiYisF7rsy8KZexMg",
  "key20": "5WCkhnPZs4WEQXeKd1q6iYfrQje39p3ZHH1XWoTG5L8WWV2uu6q5zUePEPz6ndFzTrekPuLQ37m1vSwUC7XpS4ET",
  "key21": "2oD5hQMq7y4rtabnpqmguucEkSJiyVQXSTKLtQntyKfHK556JjdsvwGhNZNnxmbSRctiBQ3kQb5fuyPfJsJfDNgg",
  "key22": "3akxGedSfQ6pKJXMq9uizVKaXLGa13NiiWnWMPhVMLog6Q422aUE9aAZfiMumG51vgKXsPGLrQXKJ9ZGsfGd4Rfh",
  "key23": "2ySP58dukRuzbtUyrMxeYeYg3v5WpbpMWHQDbqts4GF7TqG72jUNMqmKfGWBa15QDybc9VciW1FthNUYH7PKyLV7",
  "key24": "53K81UioJnRVr2haRvV8Di51gKFxAUBnaRQmZdrGbBX4jCkw3vuKyeoEY672DjrNku4WRr6vtQBwT1rMmxws3Lvc",
  "key25": "2nnFnj9zerbPyGQu7oNoYg9EmaxzP9WjhbLUKFr9T2NhRMAKUFp5EMUniK4dHKCLPV2MrSSn4zaG1YvTCXYRZEVY",
  "key26": "3R6B1V18VA69Q9WtArwbXLaUoVUXnKi2iQFTk4vS8nRLHUCztYemKsW4fZVcK251zY5FDEtTef5ZCui3dGwqxr1D",
  "key27": "5aGkCaQRWTBSyT6zZ5GP5AnGtpa3YhSVM6usKEs5fe6aT18eK1qYVqz7DTBV2iUUEyXKFspHfDoH31633szBarWc"
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
