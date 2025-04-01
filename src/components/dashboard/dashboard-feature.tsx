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
    "2igFJBVrz4UxCdYyhZL7KEiwymPSpTnWBBLDAqM1DbXg5bPL4P1bGQmKX7ko5o9VfXUn4nMWetDPCynQFzN2rU6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKVfuNugYjou9jLDafb2KB6p5nfthcnqCTnQHM3dR7KgcAqTseFVY169R3ujbhV2RJEWynA4h1fhPg1cMtpTMJy",
  "key1": "25gnUG4UVpW37BwqtVgGvBpni1Rd2yBD6Ksi2XsfwhfU2zWEndPhdSGEs2DWUsjmWGZYwy9PWenAsS6svjUCBTrn",
  "key2": "VrBWjd6LHyDxHMyEkjmoCmLTgoqAcfruUMgXmJmvRPQMTzaPdQ4TsBYSumunm8mVWziX7grnnVn2t1TtudfZpFk",
  "key3": "26W4ctarDY3ikQY74aZcKo58zqQmnZjrFG9Hx7DfVECmFTWfWmQaAoSkd53sTps8qdyRjyRCUoDX4bPj1RUSxzTd",
  "key4": "3NbeATovZRLokxt7s6v3ZTpEmZitRh3iy4cMmnhVbHmpnB8ZG9AYUWFGH1smAikkGyJpBRaBDiEwuF9hu6mJ9VR7",
  "key5": "cMCUKkBoWNb6V9iyg8EDDEn6vRfxpsjDtJotvikfCqFLuJBP8UEjsQxb5xQ5XrMh9PoG4bX4TND6SjfnzKggeDE",
  "key6": "3E2L4A8w8HTP25Hor4amd35mDW6Roq9qJZLEGzrUyVqVSwZE9EQu4Z6m8jWHgvK4aBma6MF1GyC8Tac2SoXT1BbS",
  "key7": "2gzenUiSFRsjLKGLoP4mwQX5iKKLRZUfcEnrqJ1vYbuJth4h4U1FVt4WBKAUt158xX7qpaqztVveU1atgZcRESRb",
  "key8": "KMeEjx4Ei4SCjkZ8PHZdvgsSwY6pYK3dZLbwr7Z17KVUuQWoBRzuoMDT7DkzG8kY3DKrExTAA6MANrhCArMAJq8",
  "key9": "2B7eYR5RA6PpkVffTr8JS85qTWaVnTbgohXFV2B2toAiHmxDXnZ8pXxLcycH3QAkEsS8oxzYL4fhrqTbcwSvmBe2",
  "key10": "4JFtdYm1cd6HyzZakjVbS1pwNFNjNGMFtdFT6m2xd6GL4x43KopYFRktEdj93Wpw5fK93VHdhxyPBagZ38zsYtj7",
  "key11": "34ypmQEPxxNDhPUhcGYgcekKcESw7UvLJW5N6M2SmxbdPBxPbyWTtteuZYugK1EbjfRcygijy3ZMy34FitYPJ9VD",
  "key12": "4stJr4a8fvXdof8GmeBubZ6ZBxJkCo2e2jrEQ7w9Mv17khuniqE5LoH6L5uV4aCWiSerB9Gx2PT7Hr81Fi1EdhpL",
  "key13": "5LRHWUixXdzRdEQMXmw4QiCuoerscETjJNpvKxewhzA4ZsDrK7RwhMhEXmYs7LT5pB4fG2bn9nZkx12x8yT9FXT1",
  "key14": "5nmtSRLoC3HLaBTfPwx1pfzC9g6y5baot2MSxVdgpPuhXBGFRVihtNKhhsj4TBW1rh8rdwkvzhicmjwuEMrBdHcU",
  "key15": "4zGsNF2Kn4CzeFx7WHJq71GRBbdFfDzyJNgX1pUNkfCVJDwKW316eukaA5246i4cwFJzusiMDdYafrniJTzDyUMQ",
  "key16": "BzwiJ7UBs1keMPFEVFbDDtfHJTHbKCEpPp84n8jtQT4j4ExnXZ5bEYierarhSkKag2H7VsRb8zthq7ifWpLYNif",
  "key17": "2Gr71Y2KEtnoUoHxKugTmYun1xLeCaprEV4R6eWucj6yhC5DAuNYd96NDZdwZdtqHx7Nqxe176fMYi6HGZzMHQpz",
  "key18": "5PxAx2tdrYtLzuCX5q2Hode2jZFkrNsP4AviyKat5NosF7EsazWUGP8tGH8DYd499dUwKjFVMQ3jPbEKWn9tHQve",
  "key19": "2p5xeCCaBQusqMRqEiR7G3AMHAT5PRddS5vf6ZmLTZJVxqyVzSQxg84y5fxURrBh2tXdeEmqLRUy8NkE5zjX4khJ",
  "key20": "4azuykCvrTyTprf3BagcTArL6cV2BEEBRhc3z7EZDVR2mh1vPTBEiXntvhxDHJLDENjZ38RUhsEm9ficUNLuCcwk",
  "key21": "37Khcy112rbmkuGL17bxv1SdTZpu7zezpgJk6Lge6jiuiLU5ULBus25hHHVPE9eTty7qpMHKRXKYorRr1yiu9k1Y",
  "key22": "5jE4kKGSyUR3kLtMnq63LbmM4DXbf56YwywqtFxGcjXGV3k6fjVmTck3zyNXHAkagoH46YhatgAzaV8qLWWucQnh",
  "key23": "vEy28PJwiv5EEFs6KLHrnPXKFJ35wbq5VtTW8AyqtczrCBsxagWeFhtFkSYdP81FQ4uNJDdqHVsKKvJBMmZLom5",
  "key24": "4CLJ4THNTgmiJwFSoSNCVepTYAjxHK9PSEAdj9CuPRcuz6uHP2QG8oBfv2tmvX4pgT9JV6TPS2Ke5v3YoUHSNHy9",
  "key25": "5kTScVfynmJLGcc1ooE1rUHfzYEMWc7Tpbpz8YLb64nwmFcsjF6GurunJubGuuMLtyYiF2yhLY7DdMcarMhoXzkv",
  "key26": "4kst1yrSvfuep28bYEvmob5FqERnZYTtdyuvBRZDtBFvypZDnQRcD4rmrMkW3fx916sLwrke33vBQUqUBvyezsxT",
  "key27": "5a1LZSUjv2u9hCpaF28Qujgn5PNxwfJNXKJCT9cNdvtRJs7YuC7bRzbzAwTE3SqRdNJAM9T6oERtQvoCdK3HHdw3",
  "key28": "WQiB5p9cgVUniedd4haCxB9D2gwHUWonTqUgDwtDbKVocAYPaB5f1R2ErWvWNUaMSc6WpjAJaKHBx2f78Hm8C84",
  "key29": "57WZ4bU6w9VKp6JqkBJxt5iXCQXqkPVxjnogC4BeFpnia35iiY6k3Zhs1Km43pxK4MaRtVBR41Z1P6VQcVwV5zpn",
  "key30": "5tMkZHouDUTCcsi2RDzkogsQmmCoEKMs9vw3XL36E4x3JMTtLdaVtQy2JwFPuyfXwEUeLy266xM6dezgQX3wKDHG",
  "key31": "s4ykC9wp2yyeXVU2trwgcpbXPfGJ2hwe6yntUFAP6U5scw1aS6ubmDdMQK4P125bGi2Df1rL9tmsdPahqYtwvP3",
  "key32": "5cxhprKt8YziHpTHDdwj3nu4vvCzJwkrvSUQWUwo6jSRDiMZodUJ1gdLQTv5pG52iR72qmLeCmYsf6dmYSho6uZp",
  "key33": "4R5YCHPwuQuRcHPgZpyEZ3HD18jbTvnjC487WXR2BHeYFwPZtngX8thVx2nHYEacFHXHFKPcDXBD9Lio6mNJmZMi",
  "key34": "BLdZs7nCyYPnUN1tFxuG5D7kRaEd52zhHaq1rtQ8njjeYCDtLPxQX1k5GAW41DttC1reYsjTWNFSc2WNndPAHAe",
  "key35": "4C1efZFochgBoLvLuYAZUzwcm9k75j9npwBGnujaZLsUifMdx5kJuaFCtRdS9S4TCw5ysdH6L48coLD4s1rv9Vgh",
  "key36": "4wJaEiW4aTMWKv2b98w1UHNWRF5xHpLJmKrW8RyZgNinbEKRwyoELgzaQZUnr8NXa5u3B1TewaPCbZiNQjQzmPZ6",
  "key37": "4jvtVzTWZG528cz5BBmdUfojUyGuWeNH4YX2UuLFoGhyUec5Q7F8THC1Gbr98cKgidPz83A1AHn8d4SpsyEmLXeV",
  "key38": "9ZUPmUGN6PehQtVricRjGUi4GN44ukytd8DAWFkGTKNTRbPadCPFEz15c8NRRp6RDYpS5aYg14Jho7ywi4bevta"
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
