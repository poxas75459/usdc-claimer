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
    "4tzSPNsf36wLyvZVeVALSkboY6tyWGFeiiZzguHXzvduM7YpTyZpY9mW3Wp1xh2LdCnUXHq3L3fWuZPDqWiBYk67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JPWGmMweGVAFPCfkVEABF3BgwiEQKqmmN6TxzCyReMEtdJBijuXTf89RRDKiJJKoHFrsivJKKUuin2qsHEFUd6P",
  "key1": "Wbo68jLGbMuYV5WUBgi8mmgB7x2PZxo6JhcPPcyqK956WGRmpAf955Cf3TD9AKdy5uGUj4ard2dTpkdkAgswCHX",
  "key2": "YnAzuqecmw7N2b3xFUeS5ntkWymTTLxr6DuYFDjXZ8C9jEpjfZB7E3Yay9BfP293fCudj7gxoRyhmJV6aERm9wo",
  "key3": "4baimWau2rEbahKjoMaqncyYSjVkkhPh9moxVy9gwVxgPdnNAaX4r4xn27whdpWQ9gECVeufwkXdCLLtaq22zqh",
  "key4": "2Sbgreh1ubEMtFjrVv4b99knQCCSJ1CQm7Tbj7kRF4dH2pZ1epgxLqifSQPPBkdK8tdokuGDFjM3scvELiMJoBmC",
  "key5": "2tgr3k37MpAzHYQ6e6Z1g6VjSt9SXksA5EknhmC1rXcJ6nCSERyCKRgu5Ku9TLU4ZuR7seWpMP9Wce8zYr9c6Gem",
  "key6": "HNFMypFh2EckRpW17B59GDXqNd4KwT2uojEUSHQwuQny621hUfkegcAQ9avKkWxiMt5t8VveoBoPP4EwSLDyUkg",
  "key7": "2Lre6q7iSrpzZqtdD8iEgG5yAkvkPsznj1ym1yTgewbHHWrTh35s9nC6bFbLGj6JKuvSkCivUX4fi3d84HGbvW37",
  "key8": "3xXL4VK7BaJFA8AvhxComsoZZtuEXu4qPmoQtmzVoDghT2gaYXmfiCreuuuVjLf7xJvfRA6RDZSv5L39C5KmjtdZ",
  "key9": "4jqaKjnTX4iBCsqB575uRsno5Q4miLz82EPosNgz5zs5uebSiRx8KDpj7zEndx8WzMUUcTsQW4tAn5JwniP1ZjQS",
  "key10": "4UwT73x5z93s3ouBC42v2YPRrRr4du7E1v9yFjqq3WA4VpxTNDm499MXWRMJAZUzFEhgvACz9CeaJgd28mGsHNRY",
  "key11": "3m5iS7vFpAJU4SaLhQTK89X8wK2ja7GuZrmXd2snnPVwZtadf83YiDRpkMYcDDwKLUBqJP4x8y5ZV121XCt7umVQ",
  "key12": "2TY3z4EMwksJBTRtNKHrzVN1FJ1oBHtAuUM3vbYGBwemrNT2ruUoKpWbjNwKdmP1asAQ8wtgJy9brjDhC9UCCrSj",
  "key13": "LbP61sv74kKYNoDxmD9UdcXuH9ihCfzEcHxTBiNpQrjTXZK5TVKZCyjivoXXHL7saCc5u92fTZUpdCyFMawj7eh",
  "key14": "4tJwCEKvsQAfpahC3SRzMnQzwHjVseygRKH1RTHHG35g4oxyHcaKy69S2mHWMMCvBtkckUaaYDMFND2Fpou3GNBW",
  "key15": "5ZBp7MPtKksSCJe2gc3N49XJEeagAqaTJbTR4muH5j1qP1wcDGjRTBVfj64E1RL6uEL1Db9ysg96EAheUizFbp3L",
  "key16": "465KWbA27tFV32DFBkdMgfVdkCNkPJ1rmGkRZpz96HX5pgZ24kVXxkkZrh4DFkFsUMeBShooNHtN41PLqJ8GkbwP",
  "key17": "3EC1G22nR6kVFHutxy91xJoQ5cHn7KQgQMq4EVXMwGjmdEHCM7L78EfRuxFkn8Gbdz3m4n7DdPXGhb6qnSqgBwbV",
  "key18": "2cFm16acc8h3mFKPKejAPKijQCMFyjSsgvWJe6emMVf3RmEAnaRMLbvNfUqqSyLDu7dCQ4SZEHuywMVoQzPr8RXF",
  "key19": "2Xdevf5f6rLHdxaLdw7LnH71CsAZ8Pj2m64G6iAJyhbouUePsDpPToZTxu31noCRS6QqZvjfHjpDW5V2nVxCHqL9",
  "key20": "5HTeTqjQNU1uFcCmzvjEEY4zPQFqiXJyvoTsKqTqieR8TTJsiNpKAREcFBUuM8AUKffweMTjHkM6V7XKZta83Xmw",
  "key21": "37ppfrB7BJ7N1mjJucPuAAJ6YEvEXiQcbbWtsYpDi5pud8N5pWk8NMKyTgRXdxsC1pxqhdF61B1EBgHJMT2PVheR",
  "key22": "4KJ1spjUHRXPfneq14vVKbhFrDjSnwCxxmTshyXem6SZLVzYFV689SDY7h8UqkTXFncH75QQJn1Hu8aDmvpQ7JKZ",
  "key23": "5SPrsVgS63MvdjQ5x3aMC2oEXGcQUTUNdEXZo1Ni7S6Vdmdmp3n1ZcGWPyh65ctSWqFVSDKRZAtWCXojAXyxfk2u",
  "key24": "2x75HvrBpZoRaopkoQdrgqYmEHhyPsMJqEMPZQWNYYqBAEnLdcmTtJpftpcmRyAUVN2stboNLpTm2P3WuF5HWnbn",
  "key25": "3VxpmvEjw6P4xZFYvk6Fd5qBtX9uuoh9Gx8DA124WsWRHEfdScKhESwt4kz9tBhJ386z8C4msVzVVCSzwK5GcsP",
  "key26": "5TtLcGC9W8QDdp31yXcdpDXej8YwLYTAjwdA42EJChZ8xfCu7oN6SxGUaU5mWsVSvvZQVud7GYuh7bJYvctvvcLx",
  "key27": "3gvptxuv2k4wHiypUfgoGZAuBPtDLoNr34SufrzGjxMF7FHZmdUKJqDBjKqQo8GbSrwPeMsBZarKkgMFHmmfhew7",
  "key28": "s55LoHHZU1RjwgbYsr4o2cz8L7X35rH2sjHD49D4bEBRxqDoqmTTYuUi16RgsQvBfJYM7xkqrnfXxFKJm8Ps92W",
  "key29": "JfWGqxBKr3GMXgDU1nzqHxjdS1sihmfUGex5KaM7erX5ejG6aYqKeNWmm1cZL8M55Qh8o8ttNvBva7YAPXn8awF",
  "key30": "2EfASjZpWSL2u5hCzKAU9wUSdwwyYmaKX1QADkN5DU8LGBMrYDVbS5s3ojBq25oYiWbhqhPhedgyzD33pHNuX1hM",
  "key31": "4J2YAJaunaKBzqjPMFzgmdeSC5kC1D7FdGM33cKhCncyLS2xtssHUkbBgyzsQHm36h9sdCA9kkmantyLJeZCcTwV",
  "key32": "5tQWZ2GHZeTTpqAg7xMfBrzybsXy1SzfzUGFMnwxMVhhqEe1V5V5ajzVejjWSp51Hode3vZSL6JCN34Gj5QAi3eA",
  "key33": "5mD21WFq55zJ1dHDS8NqQJpfmukHjK1sa9GAM5b3GEt3PiWJgBte6pr9Cm8iubiwL5N68scsVh7nKhsZYTyJ5kta",
  "key34": "2tf1CLB3GUM5uYoaQynWNVgKovVDMSQumPVng67LrjoEFVCShfPyK5sQ667y1kqCSWH8tHnQDeRLcDvjiwZ4WfGh",
  "key35": "5R2n9PtPXp9AFxiFrdronDM4RtcudU8BJad4u54DTaVD4RTD6nQsvGtLkw2JXZNXeV2UyQjB31Vfi92jMfMV5hC6",
  "key36": "5aKhQG6MHDeVGhCF34wURRgybVAgq2H5zWVARXpim7MaoeTvrT3tWWwj1cC2MSTAGDDXhaNrWDWjio5EZWsKfB6z",
  "key37": "4DvNTt4x8wDnCnzffavJEhbtmu6PMG22yWspuivHEdLsnCytMe2QFbSMWVF9AhuTGTn355c5VwTvANEoFzgoc79W",
  "key38": "2fxnr3jWbH9UWsZeT5RXC4E8b2D83jeZxJ4X4RZJnunb4iUFhcYh2o9J5f38yomucjsT6rEHojgeLj1xzuZBCqvS",
  "key39": "46TAhanpueHiDi2YJDWQYZfavGK76P2ERRqB1VHTD9mf54UM64GJdkhqBct8KL1TNT32nkx3wGnYzVwqj315Y7oU",
  "key40": "3LQ2UuZR4GppmZbn6jyeo2LBFpzWBG7rAeFmHAu76AfEnnpEQyLe8RfVbHrrtf158S6vJh4h2bpm8U9wFpFjD2ne",
  "key41": "2KiSZ9VJpuSBXXS5Z6tgueJrWyRQVKRXo9Es2ZM163vZbVzErRQHB78pW7ApBzmDkkXUfjwvZCLao9P7eCNZKEAW",
  "key42": "3p8QYajyYhuXzEnnrsuZuHo6k9UiybCbxaXE6YgvhTyDNku25xYMFKeodrp2Qdc5zxxY5c12spvbfjVBVkFPYijP",
  "key43": "5RPPMXuCG4pqtAUotafJgf3cfjc54xoWh6jt8nveQbgAqQXmhGaEycDvR9ensqb8txB5evzZ1otXvBdysoo2Divj",
  "key44": "3hw8Fcae9xBgeUfPL8vaxKyaYiUKPoCdzxgtPkR28dtHnqAamHREkXUvJRNcwUBvfzH2ERWvtHJoQ8pTDgz1RQXG",
  "key45": "4YhAjZDRqZx6V9d55R6nja76dA43rL8ASbvXgDqKJXgNCXeqNfMj5aJeTRd8mTMyETQNB8xJp9na7mHqMMLB7P8C",
  "key46": "4WmDD7gP9J9K5TGwdqTt5vLT4v2VBpNqKNx7uRtUJ9oPyWz6BQQkBLDUzJM4wfL1WgpFHSYW6yXiQgoVjyN43vKu",
  "key47": "4hGjwWNfazMca9G9CJzz7x3dg2xvCVC3JGpcst1dTRq3bZjizB3q421tWw8yhrG9hPNqxzq3bKcvLDcW37d3nRmv"
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
