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
    "2gP34gULnESg5kJDCA63Z27CGPazH4xyv13sYiqfDFoLntZaHk3DTCDcW4dbNUx8H4BLbPpg96dHWVES3PB8RZ5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLufdPawzvGBRbtRYtqsargNTWntDNr1vMnmGUM2p5NeddNV5MoP8pQu1ndJL1v5Ybdb5Wx9C1YJHXSbus59612",
  "key1": "2z5hRZZxhr4Qkf1U9tqoERHuWKPsSzMzD6ghbEKSDWWGotinQuxYsSX73ZupUPkQmEUPxotdiDyy5YgodUwHHPFr",
  "key2": "2kyFAkqdp93At7A1ijbJsdaoDqgzDM4f8DABtT4DGaJ7ar6xmpXnGgygSSzfcFjMVu17xtdagVTCxQChhcW4oywn",
  "key3": "4GA8FDJzui2nva37H8XDXaaLDKup5u6cT3HhhV47WNFQpFQz8C3EBtGBc4y2U4FaV93NqYeJgx1vqqtfKS8vXLXD",
  "key4": "3vebdJ2hR34dgA7kfG3UWGYQQxAEtcS6HmKCugA2EjCXhTcURWtm9fA3BM8WwmJYPd8T2osUNBRpNxnn2YBURxjH",
  "key5": "4ZgRcVK8YKNHYEqF7ugAKGzY24jGT47SR96XqNgqLarXC7qrdx4rR88ktzSbrRMvnwZmaKx5rUdMQeVy548vsrrQ",
  "key6": "31YrZCRBSagmM9rJE4iy6X8tzWzBVsd4ieXybaTJ5AhCMrZcipeeD4aCQ6NqSJnGvtvNpuHUwh1MifKB74hhddtu",
  "key7": "48WaPz6nnKaja8qZ41dD1et1rsu1TTFhrvnAexcafWnSzbdcxasMq8fRXK6HhHEXtWonsJFTPNngbUkQvpvregy2",
  "key8": "pB2wQ4J8wJpJQ7A1k5LtD6zKVEqZuAdyTwdyEgTEhgHrzoffbFZFsK1ZPAjD2R7s16APRkVvGyZ6un2GDLCuDtY",
  "key9": "4KPXEcbkHi3VhZbDTbVJiVoHfZxCdMeYyYwNZCcQoue7yuoWUZKp2Kcv3WPwHUdxRvLprkDGy4N6xMh16i79aaZY",
  "key10": "2iegXY9B29Nsrv3sgtUB3JQWw3DC9CEaqiZjhLK6pt2NtfaDRNPrAhgt5Uq9dhPH4yzo8GTa89jdaXHyshMvPGdp",
  "key11": "36UGGNZxTetHSoNHfX4FbAVLTvXgxBetULxkfWdzwvFrFBUoCsCrVddaDGjiz1uwabvQstnyTj4deM6Xy2raWHxL",
  "key12": "3v3ZmMXah4ez9ifg5pY2cYwTkUxUvyUrGX3GiYKJffQYitcKrPB9N7JghBidqi1e1vACyfiNXKnaQgp38MD2iLyY",
  "key13": "3zpu6bH1mm1zRGQtPbGKVwcwfT9QtQgqnx3a4ZnzxWVB13Zipctfs219zSRfkBxw9MMGhnjeM4Gf6c3VjsrC5eqU",
  "key14": "3t7S5Lz1TFGmW7x9wGaKY8hSWwiNDFWiRzx7VWQzVWXj7VPfuEHNN9kXiVtWRsTmyovbjSPBVg9KKBJLgwxF5sLH",
  "key15": "29WxwrxDtveVdsJFMAb16CKckRB2z5nPp4CH3Dd4TT4gVPiWSDiJdrmnJgsVf8XxPMHH9LT9Vb3F5Fqiccjw2BLv",
  "key16": "58hK5EsyjCKXMAqqfFNhHMMnaQh8i3jg4o8T5aJFZVMog4QwZqEUZgKnYYFuiPzn47e1TtMBkZjr5ewZZ6oig1m4",
  "key17": "52JvsyGHRmXiJMmTGcvy69giiX6op6hrR4DbdZwDBKvGXFDPnb5M9S92GnWjxbShnPPXm3BKh7bSXy1ZBFmhpGdp",
  "key18": "2pvzvuVLF5v478sTEaA9PxWK8HnmWuxof4Rrb8Fa11WM2W6hevHPefu7dDJJ5tywL3NgWeoyjRxFnNbyqgs6xaxA",
  "key19": "3CUoev9koJykTqKGNkBLpXgaofMKUN1fuFbYkAfJobUQounV6ALYPp8XGicWWais4EBhr4hghjREQAbQVxXzbCCp",
  "key20": "4tUVEH3ZLuc81XsHjteFVmiTjKLD3izNK3rVJGNSyAmANJhv3jMLpY5Vign7kJrukqoVQQDyXTHzLYvmjDCDA5kC",
  "key21": "3cezhi6xTk62nLuS9ydxUJE7h637utBPka35ZannvR8vm15hy4HU1LXNzHFExnG6Hc7xtgt6aApiifnaGn2y1RDw",
  "key22": "2wjTz85fW7decpJ2HxxDFosR4UcpN5JApbBcfqHHzDhVSYz18krmoHmUJEVoWfD4j33e4hrZCkPaZuEqr55LWn1K",
  "key23": "4ZSoNh8SFtQWaCe6trbWrtmBtqqhHV9o7NJ4yZ46q9S6vEWbBShqnjuT3i3GsS2yDY7BA34Me76UET97sqPwDUBP",
  "key24": "2VZNhZVEJagNbGiaeU9uQrA9BdvAJtWgSDJCiotYS7oSkQcw8oy5mj93eMuW42Pg9R7CmX4DX5QP3wck1yJj6jjH",
  "key25": "2S9Zo61e2Fnq3UH8fwB8HiyzNUfhvbuEvmnmXYgg2BGfpM8vZp96eU8FuTzeZETCgb8yyEizkuKDbUV5zLEswsHm",
  "key26": "4zQ5Y6DHwSkMSPbgBn87WNcDhLPfm9XGL5TFPGpubpDF6Z24gD2WrWbECBNhc8UxuvbeEMMy3gXu4gyhPfJMJBA6",
  "key27": "kvGP7NwHRTPt8PaWqzwxkEicUgmqiRa3k6UBSwzYdPTQ8BjXs2eY62pRHCqnQCgoyeQ9keBnRayMBfzN2qoczwW",
  "key28": "231EHZbh7HDfMQ9e3d3bRKyzBfJFRX9cpfRuBPiJnfRdNUPc3PWZcYmRLS4YdevuTVD9UyP6rsyWu1kYsHSBQzre",
  "key29": "4eXc7rGVJj9XfnJYmeM4nUGi9L3ki1poPTEL17Wb3kz2YJkrTUELydWzCCA5rMUbguYp1sanVqrLyzQJmhWiXQxn",
  "key30": "45uBocbQbmSys7RWPkdz43RxT3WTUSRHR75XUt6iCJ1v2VRYskh1Vmvt1Ng6nFJ1n5WVmgDMiHrCPzMcYoHEDTXG",
  "key31": "N8xzZ2MrDk96wJmL3JQfRjZw9tZDG2n67TNzxenPZ6RbHvMmiEqbKNy58yfj54Xdz7uS2jGQWPbo7GPRf5BwrNe",
  "key32": "2RLuD71wZcJQQy5WVUweYrx2TrnoDKYmCSbErykgbUwh55LuiGUDDRuqzmxcpnqsHhN9wTs9JUTYxeg9vwNZ7SLb",
  "key33": "4zxmPCUPqkMmkTRRNzFqVBBHBLni4NGYvNQn5aDxvnjv6WcK3M87nQtNgdA5UmbM9hqZoj4XpEEbsHddXQdQ5xG9"
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
