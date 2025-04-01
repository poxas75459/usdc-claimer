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
    "26GWconCVHyu8otGWsk3PSL5Ae34tyr3q4JCkNs3awMsP1atHzXwxchMJwerzAMYxesrsr1RumuNmmhykSnFDWc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zb4btjoQXbESUQ5MBJgwLkstSt8Zqh42YSS85QQ1268o9DY5DAq2xiqT2o679qmfn93D2RNEM64bV8y1Qdp37wB",
  "key1": "3qrjQ6bv6FTiipNhnnesbhkZ9sQxMZCGHZWfDhvm1HufmS7z19Z9CPJGnYY728Hi9TrE6dGCqi4AdPq4VxhZX8Ww",
  "key2": "2HZzYfFCvDC1PdovM1EHwh9MdCDmt1S68wddqvcnYvbQupqNK98RqDxyHzeADrcRwnUv1niKjwTe7eZYLunjBidv",
  "key3": "3eCQuqYtbczddq9N1psBiQ5pW7F5yWQoGyzPKChDDHPB7GF2Hagte1NdEH4toCY8nR7YjFwBwzbHjZ1kC7JnREKv",
  "key4": "2zRyTNa4QX5MVfNxmszv2xMrjuUsCcV7pcm3NjmGBgHDTWaHX1TSBmQzjtBbAq3FcpbE6yKQArbfs6m3qyyvFcfw",
  "key5": "iLjihpWpdCYF2HcU7KZXJ3Aq9fVBCFBWdj5W4UcNKnUvoBZhq5M57DtUM32fQVHt4j91rEaLrqKRSL2tN3LjkfF",
  "key6": "ryUWbu8VBB8QB8cuqeiJzGWPeaoAVa1uAyN87CFFVgRMjcHDJhGnt3k7X3Nqy93YVhkDXwfEWw9r9uHcpcrJpxw",
  "key7": "5vVKLS8yqRJnbnsBeJ11iyapwtyLN8vgjo6gRJR7LS7AB4j2kijZ2ziTaR6EqV1oD425q3h3zv7JNZ9ekbdPMYgk",
  "key8": "JTmcifE7Ly9G8a7Pni8Ejwq5DGYtH1XZ7M1AgcETd9BoVP7rFCrf2Z2fHCLzymYmEWwR9UiBp6SLqjjukvEHkhe",
  "key9": "3gMPtxwjQmKFK85dPGxVdNNJmiSSfbeKc3C7e9uNcckCqEzJJgCBivAvUrLUbuh1AkAUqqax8L3iYuBUZPVXFTvn",
  "key10": "35fgTxe1i7HtmfznoJZawWFqtJ8sGpbiz6iG3zAELybD1q3Ug6ux53azZecqypoFLtEiGPFSu97u2EhYsG8CS8Sz",
  "key11": "3y6es3cjVdsb82vgbmiSiYyvoWzraYyrDMTqc6vfV4jhiberHm1YPMBCHR9S4HkwNx6R2W4PHvWXooLTqDFsMFc8",
  "key12": "4vTSAQpqHLN3oT46PZzHu9dRnrycBJEbw23q4fUwZXMkPZFLUNooMT2MGzWyw7fX7cYVqgp1EpRtZBHx8xpucrux",
  "key13": "GmcMQKBhwFXRwAbrbwYkbEbx77xrxQPpLkVXSaugx9xXeFJa8ArUjnmo7wrN2DUxbBCTDGkmjFRtUg4N4qidHoW",
  "key14": "36YdMwS9NvVofBNk5JiqJNJf74UKarSJsm6GPRrv2CKSyQzGEzBkszEX5vXRRaXbC9ZKs2yQ6jGzNAfqHgxKQa9t",
  "key15": "121CUKNpnBuNbdPVvwBE1kwwLkfeGHnxhnvfXsaabFssomEsH8nniPe85gEjwvSQUZv6BQx52REeDx5tFsuSZsdp",
  "key16": "44pA1GRHLKKQGw2mhzvBkxzWf8D5gu13rnCBbDv2j5ySFccsqdxGWBYTww4oUt2RC6AxtzkUvFFUCKM76ZEJkmAZ",
  "key17": "4u96gMPaDUAhDNKoSiKiNdXU6X2Fw8FicQHtMXtyekEEmfvVo1e1tQCSNynMXDDpuw4AeX4BtfoBh8NPpnubU6cF",
  "key18": "rjLdP5xubGbYvtAwLh2FFSY5fNbbA825GbfMRJQacGQnMdMuZJUFJKYFTxsAhfvd6Du9vuUDi8VSLaGqoi6ZMCw",
  "key19": "4uoYS5Yn1ESpEXoY7BftKYfRtgyNF5eFZm4zp7cunbQBuaV2PLSM9n8BgxukayTVcxTzsX22hD1zErChagrADfzr",
  "key20": "3YZXj2wyWzMk3srsza1o19MbwR5JVSVmwS1aFWtrn9c9XsDbpLWBCE9Yn2QbnC528Fgqawak2u7LvfMxWJKQkE8a",
  "key21": "5w3gGhzdwQp5U2FNXtEg8g44ihC5o88Dasua9ryTmGxkEBUJRaCy9MwSsWSXkH1knHoyr1hcmVoYUXNzefqEE69w",
  "key22": "49vrXnzWv7pXUDx7FuZEsoWiDTMbYdPNsc9iHgBhWhW7iSxBu2YXVjFYMXvrjuamn7RiwA5Rsm3rocfifMiCJ2ao",
  "key23": "5VHxcg2hC9Kd3wnzB5irEbAekWCJCZ7m6rpCFUhv89DsxNb9Tued51NyFeHjvd2eApbkPZpkZ9aRF1fgxSWgGJUA",
  "key24": "4mPjtVSczU2Yoic1eSP9XGUtpRm9fMR24HmWLgREmq1MYQc3b3q4H4kJRz3GzmcnujBU6DcAFm6tNumHpAqKMCxm",
  "key25": "4v2xr7YeTKjixHXpXeZVhVUSZ5uRJETQKBgQ42k5aPmmLhZdJcdUUDX15NnfmNJfuAESaLB11U6mWttkmPNsw9po",
  "key26": "3gbw5DvuzRenDT5jytxQjsuRG2htvhJg9oQLRQmcxpJ8ToyRi2LjedSiwddLQc6PA2PBptiDbmwrxUThUrs5GAWY",
  "key27": "42Qfuz2ZSPoxZosH4Z5dGk2wjsGzK1tLu6GZc7dexQYpXhU9tKzaNy2r7MTu9sLAVSRRU72RuZpriEQEcszXBN9H",
  "key28": "5mDA1uhS91iiMVehXt649fZ3DRAPsuRpnooaWKARck4WekrYbwBgpuK7fAmLkSaHR9SLRgcyrEYmaLMW68p1SJHQ",
  "key29": "3fgjQLbkNNNxoXdsdYBdmT1sx5b6khNy26cbg8wkg8bdtwBJfcy5Df9nXETALqfNDzxvGSWPc8m2yXmbabAwogLo",
  "key30": "678ZZJx39B5PNsyh81RXSRzuzxahbht7PyHDdP4yUAHSajRUshWMCJsbACaUMBVssTCbt3snor4wUqDTw3PiSB2q",
  "key31": "2aCjdktWnyf1q6DPNtKYjhj9aS2yi3HFpKKLbKw3Bb6wXBbKYRnqNcfY9EMBDcvDz8Xr5VCspAZeVg9NAeGqZjf7",
  "key32": "4fRETf7SxRMiBL1t6qPfuvVds73qpqragTpqN7fYA886EWLTVKVHXpdNufcUttJPtekxmmAafBL7Y1Xp8vcgBfWe",
  "key33": "5Mki98Y1ruzCHqRkvXvjkVmJbVFwkPHEW4d3ddgoPsuBE6BtjKUQNBWvZU563FsrHdYy2EcdRJUcEPVjYKFcFQ4K"
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
