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
    "4hg7Bwc5eFEQA3549WBrXTQoQjM3QLgvThPrv1DUsurLbKW3GBEYTZdKuTjnnoQS54YYhutKEpmQW7c8vhXXvqVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFoyDTyRDL9ECycEH5Wym8grrxmFFLQFTwaDmu8RdpTaf9jwtKdxubUuTFA1uURSgaSbaifMD5BJAoZfpEAFi6a",
  "key1": "26mdGsL7jixhqppo3pPV1BM4hAqvjnBAux8i8mNC1VAqqR5oiNLWy28vTmntk72Uv8MXT7XfCCrJtwmcxxPB84Uu",
  "key2": "4TEhvxYp68Rm7m58jqE3BfzWz9xUSmuXQSxTb1D2BSqZFwkcgQuG4ifrCwxC5hF675KVdj9cFJwaF2xArDAPA33Y",
  "key3": "2nmVaTjXP2jyU1cS2BtwqzixTfkamRF3aWBEVzr3Je1wqtjJTBW5CCcVcJChf43e9pq1JWvpXFZ3qXA33acwoEkh",
  "key4": "3ZypBuyMxzDSxAtDoeVVCr8xpQTHAcjMdUKD1yRPmWDQx5id9VGjcxrfWeSCzm9eGpb1ga9ztJnULYyYBp5D95Hh",
  "key5": "2iagWLY6v8EHps5r4oqknsmz3PyHXh6HA4YVZfD98YmjmviULzgRz48vNDsyvdyuXwrn7XwvoXd6BQxTf1VBqBbx",
  "key6": "24iiLEw15rcYxM2hb9fvSyPiv7BvGEWz8H4LfXiq76DW8rEWVCpzxwz64P1xiK2Aq82JM7S5xoWh6SoRgGDWEi6Y",
  "key7": "4KKKQBcQUgb7jQUAga1jzgK65Y836jCDQbAY6m7NeEYMLfxBHNhSn5zW2FLQ1KYgwxRqyzqVNBVBm99ZquTqvtGY",
  "key8": "3TZGKtYrw4LmDoExbMkeLcQxByfJ76CXF35VKNnVkdUVVSVgaphRkb7b3mycVNExBgiBHZF8cfw5LM3Ca2vJ3CzP",
  "key9": "48uuqHQUTfMXBFZFn2AW2hqqKxsfmAw5eivqARKvQ8dwk9fJTDV7i8YzXFWtKeqmRdRU6eMphbuagcsdAq3BRuw4",
  "key10": "5eA9414rDx94MsrTTvW3S6EFYucHaYw3yQu6L6THASYDZsnswx5oEeqQ7zBSKA88Wf5U5ScVBvc1FobuQtFi7qMi",
  "key11": "5pMcE3ZM3HvwYNzMd1yU7Tci47Es4k9jQ2MPfgTj1EqeadJA6xg5turBRwxNJzHNQnSN2YFQyWQTQZzj8g8Kpe1M",
  "key12": "frpSTPJ9LjyNc3aPcU5ComFmNXKzfcPdha6aLfKrzRfVaDtY5jHZvrhA55eLpvGpCXbDvytnafeX5nsoX4GiLQh",
  "key13": "5BxZM6CfRVM3q9Ad7yeRMoittstZPwqyQF9EvVZkJrsNj8dMW5dHrMgwUH8CrpPUSyx9dnShthRByFnzxgKvuPNN",
  "key14": "2FXFJn2M4RBSdyjgtLhJAJsQSnFAH6mmvd4C3iDqHMbP1TxGAPJDgAUBWuCfiT6SMVhGfY5bXmUaXqNYvNi45rxh",
  "key15": "21C3Yj6ZnfwqnWgDqDE8WgmHUjKjccokujHo5BTaFSWYmPMbZKsAxHbipRXce5GCEBveXGHgFQkieJjpf2anDXKC",
  "key16": "Lq8U6PGfHP7z74zS2cpjyw43qSC7EobMYzLh64kDGmEa7gTWECgmHcuaQLbtCzYSDDyJ7med53212XRNiznjuhz",
  "key17": "i9jUX26wfuh8aFZ5UxLDz76eFMYdgS5j8pSe2zs7uv4sbq6yk5oPWvTyti7gEUBo4R55jgrBqSh3FJXPJMnSMGK",
  "key18": "2fRkBrmXenxZZ46g7fFBZsTDwM5TRuQ34Be2c4xadx6pKzZfNSQGT7XRuwuP72nkDzACknhRHVNcXXeWbB2EEGSC",
  "key19": "3KgnksezFpyX8KnjnrUHzoT4uxNchsC2a6urfUswQMRUrnrtM5LrXnGHwUhmZDc754P2yAfNXcyaqR1fPXJyFXsU",
  "key20": "4TniqA3DwEcKkkXxY33APC2TYPXKhsdTwPawKT97cssf3dkkVD3ErPYC4qUyjPmFrno7TiAt46snEofeL5gfc1pk",
  "key21": "26XufXi3rYsDzJ9oQxZfmpVNCeLZEa9kYHZQcnKyTNyiJQHvfC8YPJm4AZgdH2PvszjrDQisEExQ7hU5awhUJFdX",
  "key22": "czDU4hYYjdV1MshZ5GeJ7FXSJ1EnQ53ZpnHzokdVmknTcoU21dmJgG94p2YxNbxMvJ3HobHzz1DgvscuwC17j38",
  "key23": "4iijeBKGFhq4v53rtE6HCEN9CFXUTSAdme1ukvpNaJCEbL6HoRzP8rq4Vq7rwqwEitiPJa9mBJvBXJVrYBQeeZnb",
  "key24": "2xkBeyv3gXnMNQ8DZaBUaA46vnLfxoEHP9dWArbeYG38TSGxV5MViinF9jyPJNBNQmcmPueq8nWxWD2iWT9Kg6h8",
  "key25": "5XkZM5J2g7jvUHBxoAdAkWaAevQu1DUe7hkDcuFUiQuwFKBc9Ee2iHf6TKdqDaGG3pEfMAM2Zfmw2XkQ9Bc9aQB1",
  "key26": "4PKzBMeGWytc9bv2HkCDUB4yW8jkSuyTmgVkHUQoHwaZm3p73d4YCTgZtZMBX4D1epZ958NNsU7Lck6q5eneMHXa",
  "key27": "5e3NiqywwCY9yS85Ks4XiNYUKpbe83hGuYEvxfgUuAES9fgK79dwATDSuSc8T3SaEt861dydQpjAQ6T9ETk6oNdu",
  "key28": "2AohVWSh6eDaL62fM1aC26FKah3FnHc2xxQHorGdkuWsRDHbSPE5FCKA482oDrsKCVcnCjrbjWd4vNCQ9FTfJqEW",
  "key29": "Rwv5BiqkLawJopccNALLvVBh7f5kptZMnQNASfnzty4E9HozVWyMUn6YMyFjxbMrhf7YWGWTBwkYsxXHTPkY984",
  "key30": "w5P41UE9rA4FRQe5nrtEuyayaiAZNh6EorxK5NGuSrBTGzYUSSanhQz54xadBdCHU2kY6Jap34sPmX6FNPbomQd",
  "key31": "QRAWJpt8zt7wXNwhgpG4ccTHuVBiRRPt5qV2r1k1o3rqTnifdsXC4HAvR4CQ9apT8tpGx1KVencX43eDPnwTSn4",
  "key32": "2mxx5hz9f9KpjhheX6NHkoh6PZ9rAzt6cSsQwj73tdDhABrnq663KGRirxurdCyvQWPeFWQ4Qb7TD38zwbqniGFc",
  "key33": "36FJH6NAM6mcdwYeopYHsR5wNrUbRwbBASMzTGLuqJTDfaGqReAzEy7wjTyFZpBpoAFSzpAo2HFwQkWqR4g7VnJ",
  "key34": "4Zds2p8p8WzZ5F27KQ5BAMbjfpRRxWU2io8FjgfGQ47H9zU8QCDuLH8N9iyeakJSumxSh2qYVuCzH7b6n16AX6MD",
  "key35": "2Vftyo3B6bTKqJ9n7jF2vVgyh8ESqbdjUVwbGZNVZTQCYui4aLgd6eTi5nJQcJk7tR443SuH5Utg541R8PPg7Lzs",
  "key36": "4kxFewe3d2uxaJJYz2jarkmzqZDseHS6hEgczfqfPp7gvJsaJzRxGDugGCYjoeXLB5v8BSmccLVmzzBPWMiYKpju",
  "key37": "2E6fXMqTnwVRaBbzUQsj8BoHPSo8VjvV8CZekzCjBczYviURwsJVD3kwuK2Nt1HhH4B5C7NVMY85ggQgmqHTpxsi",
  "key38": "UvJN7oTrGoRmBmkgu8RzytX7JraG4au3YCkYyeppzWDVhQraYxBs5dThtpKKve1PNQ8V3keMY5WCCxxENz9XqQ8",
  "key39": "51woXWdFWTjchCrnypEsNMCt1TtsN4gbQYQSELCUCjrz4Z2BParV6CRrzC2aqePuWtP6c78EevuDczZ4GpCQH81q",
  "key40": "4whfmvyCEqdptm3t818zREWPDxxA7bJigdMG9Pgswy2EHrbFK1NWaD94ViGewpVboD3PQrJCCQGaNH6iCDJFw6UN"
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
