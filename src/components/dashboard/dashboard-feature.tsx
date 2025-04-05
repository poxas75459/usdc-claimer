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
    "295KgccmRt894MGSbdqJf9o3RFAfDC7pYLRyaoGMqHjJywfPnHTHEbARZpghdA3mskS7PHpmyszCoqRq5cy2WoLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5enG1CXmGnMEof4mcruXrccZWKzkk21icDecNd6np6JnS78fKvGUDTaKYVaLrbrmoeFJ1W5usCHcaYQ7rv2dFSwJ",
  "key1": "4Wgb3g2b1KxYnP7iuJBBhfkEunZr3GuoeSpXv9kaq1FDf9PJJ5QPX21S7mAGGWxBHry6NzY7VetuZGeBNAKLtoCc",
  "key2": "5XquR9rZeLj65XGxkQuYGDBXJFvHBKoSyFyiUfNLR5TgzVaD7Yejm7cscDriGEJ2SHQzNWKHnexgkbJT4uMkVx2w",
  "key3": "37psVtJe4smRtXFxqGc8xEdKRqzR17GQZ7Z67bwGmchGfQC58PGmUnjMNzojigGrUGBamnnB3zcPvPXtzJYEJwfb",
  "key4": "4FJshf1FntWVwrFAvFNyiRb7DnQdN64sCHxSzLueasbFUHS1nZkfNdyj1zEb4N5rHgPnV5EShGC2i1ByYY9QcQvL",
  "key5": "5UoKTyWLo3YfF37RNPmLcXZYsH1v74dbL3J85i6B9AhES2dsqzQ7D8FiUgNdUVDLLRSwstBBn5kXHzvoWHD9Us6Y",
  "key6": "F7Ev5i5rA8KdS9D8Fpatva4yajbeZ9EDR4iJh6QibV3Grxqx4Wfw76uG3ZEb5gpp4kSpkvaBYdyTsUThxXBMoKP",
  "key7": "2gxyQQabhhN2WapdskwKeyDi75fTjNpXGcgDP5C66icG9LN1iGvt7awW1r83MTooqBaA3WP7e2YXRc6uAa4xLZhT",
  "key8": "3HDascZwXbdR2HBuk4BysffkqbUeW2Yb3MEPrxQjYpztnBrWRfJcpnqurCrS2P4RiRrXvA6bA8PE4gVW1oGjwGVb",
  "key9": "2nf9zg4jrg1Hx3BEGZfvW7xdZrUWub74aUgivVrsX1m7RSUR2QdGi2hs25W9bzS6Ua5obRnSYyWG4vvQBKazz1kC",
  "key10": "2cHzELDckQV9n9tXW4VLshUy2hvcJQzf2LojPFnxsohYiYEn1Ey8r59zVZTgGdK5rZyxAFykuTr71EMusM3krLEC",
  "key11": "3vWARUfKoTJXCh7EZAqXkY9nLhobncWngpjVhteNPCq9rARct3R1JSZrUkoR6Ew3cdM1xkoicumhp9UJYF7FU4iC",
  "key12": "5gj3hUU1R7abSdox4hbUrZgoJ5vxLyPS5rjyWaY1VAHE7BQp22Bjh8rNmnmASPqtqSbbRVrRjcqQPRwwQoeFRawy",
  "key13": "3MwkLeKtQ84Nd2e8wqohUCYSsoFejDCRSnqzpv4LH19XWumhuPj71wT51voTScsqYiohkHam5BEU8NFoRhZ2kaER",
  "key14": "2y46b2npLAUKcLBnD26ors1DmJW3ouCaekK2UFcz1hb8HxsGZYfhdEqtbxZ917Hk52USgMwsQzxG2cp6GhdKbWA2",
  "key15": "2K5k69hGg9KHNozFXww89wix8PYaZdqMQwipjNjn7wFBZ2pe99NoUPuiVL663ayGPwgQSAmc8dDxMw6x9nfPREUS",
  "key16": "3LJVeWUtQkNE45L61gnc4pnuZYFRUgfP6t2X74J9QHoMsoiAkNgAeWPaKQgGZdTfG1pMAjLGMrRz3gdg6HW2Qoc8",
  "key17": "49YdU3qUN1B5qeSZztUCwRN14yWurT3LLa1nL8yp5CYbGYid3SUADVKx1f6SyF1mHRrDkNRDkbmy78fvMhgXqTG6",
  "key18": "5c5LZwJ5f5DDtC2iZEEmfK8vpH2emJQ6kLEZctLGRprM9DhFS3g1pAoikghw49y4URSgyConhRkDZNumWCiV6E6K",
  "key19": "5f9WgPCRdgqASNhPCXvHehrZCH27TMZV688ZyaLz1poR5oq1VRxKuJD5RV3jvcXMhxnnPPDK3LnaesN8w4GR8G6T",
  "key20": "31sdLL2tNLQhdg6AsfQf9UD3PwmLXBXcfW1izs2TkS2t4RaQidCPKESfeyeSjhWcz4QzENsfLoMR17hg2x2KWRzU",
  "key21": "4eoV7SMBg1ZhcfwzyWVQCQZ2WynZrhR6ztYMnx7W9LrXm9FMzZxpH6znhiFjS5hw6js5xPyofCEetxQcGFiFsHmX",
  "key22": "43H3EcNJLCSi44R5s6oAfoAAPm7wtYU6eht25SLRvx1zDqG2m7G1HHnm6acXKCTj876EuvbBfozUigbL4LTx7XvT",
  "key23": "3JfpDqPbxK1Mth3NcxQmhhsYeimJv3rXwE2FiihVTRKTemVNnouSVeQzJmRJkPTC3UAL35TrccVSpJn5n5mHwYcE",
  "key24": "5uEorDWYFE6wAtP8Xz9G8yAHLt14yP4AdL3rJsTpKhLA5JLosfwFB6jqaUZWBYGhpxLzApQht8housw4AVg6M9Sf",
  "key25": "dKD3Go3YM41rZTotfs1MFV4NtLnzYDqa914GsARi2dnTaEtRBEaTsScNRHJP6SF1uKqzNTsDhmFR7oL92hQz9ZS",
  "key26": "4PhfAcLNPY48iE6cEnVGbDAvQ1X27wv2tVnPmJw78TL1yQVXbJ8SUvEjFqA7r4TJPdaZNFaR6PAo6dFoZAJtrSPc",
  "key27": "5QB7n5r88BpNrMSf1E1tZqTggN7Whfw3Zuk7b6FC6vZW9WfzsZRJcbJRH6u7f2CT2nTcEw6DZMxkXgob1Unt8yM2",
  "key28": "3Hqg1vXuLVW3nAXxCc4qy7fQ7nP2x5GNbca9CR7nN7TTMUCg2iisZg3LhtKi9StujxLJo2ihrShGKrdtZ7xbyZrP",
  "key29": "2jW1NGTeKm8LHfBt4nMWLuoMrmMP8k6zqXMBQFLM6LPWvoFZHZ14SVLNcKp1Ev7cnjpgdvNKFyvxhjoED7cB23pr",
  "key30": "3eXqE9YitMZ2kffci5CmsPgji394YRnKWXtkhwN3peHF7a6RhPUMTp2yz6eq2r6MCvBGTfeCsDZcNTsEX745ZWh4",
  "key31": "XXzs1CnLRXHAqrrKcbvrSGxJ5sT8rq3JYcYBomVRFkQVohrtTkyiFeC1ckMnYaLn7tPNJ6Bne7orjgUX9ZgTyLJ",
  "key32": "3j9aFaozKFTLTkHyMYC1td8KSJcMunxG65d9p19EC65mjVCctQGfUkkPDozHd8jKKDjAKfoXQrhHcbc7Dox4MzjP",
  "key33": "3JLbsUeXwyzEaNvK1Jut37q4EERcRPbvAN4tD52Djbi4UDvLtGpjJpR712pBhUf8ndimhSE9km24otwGtFiv653w",
  "key34": "28nXCn1NKAWnnDPJMKnDnMAVw4hitF7vDj4xyZAkmzNWY8TmvRnwCGobAZbo7UnmDpnAAVFouM52LMStweTewKFq",
  "key35": "5FTUBYFPgg9xnSwt1Arc2DXcJFJ3Pmdosv2KVmemYszjqjkeFKC1co62cpueLesSzHx1vm6AfwPatCkFpb7RpTCS",
  "key36": "268roqibi1ePxCSiX9cpkcystUEHo4xy6MDUmofvyKSDJvSdz6BUBBmpVrn3dpdxmbiivifTQqs1UKBpSX7MBGr6",
  "key37": "4iGGZhrJkzAHzyZn5Cku2NCoo3feaB5FvCTPbtRpzBJaRQ9bVPDE9jLMayey7tTyZxojkbpexgmxecan8D1kFrtf",
  "key38": "3s7j3GcBqUWHgUQjR6ib5tL8p3fU2BZxTLS5xD9kdjH7XwKVuHUhyDQYyJB6EoGcVno5jgCAXTntM4zDN9W4LWtu",
  "key39": "UWfQdrTS2E3Z6GdfWkXpdZErYFKNaddA75pWqY4adppLo9ENAkTqQUHg3hXJBu7LobhaaXzpGQ1KThzF1HZxwDE",
  "key40": "5aLsAGxaEHMZAUZazzsoGpmGt2Jgk4f6SmjAo1w7SNaxh31WHDogozreFBWMFgJzT3Qrudpgfsm6T2NRDBcQnzMN",
  "key41": "3AqqSrFbpdfhoarZoPj3p98eFCLFyK6HArqbxCZNrPuheVW7feRMudnvY3JHPAtePQHj5utrqBifJSzNgzKCWFyk",
  "key42": "NiiPpuTix9LHHk8wKz6Po1rPVfNez2TXUSNMQR5mGiNWtePq86outpUShWCmPZ5MLf9Dar7ZUpqX3UfdJTt3ycC",
  "key43": "9f38gGLYacgiacHQ6xWnErNhBZnxcApSNKDCBaSTbSAYKoC4FnubsT2L8f88REr4vkgiZbgMNv1hRzyap9R68MR"
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
