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
    "sVRpW4878KdNa6wxCXMmYp2aPoMqx9PaujKSLo4nrfGEK6DxrDha5frEHzHikxajwNrqREi3wUC5fN9sqZfvQoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyVqL1prHLjbuYWSSXpHJxwBR1MihhzeMMFX4RFWt4TNpKkCgacBhcqqnC7XU4XeV8ZEChFrtSU7PCdNdMCbM89",
  "key1": "NfBz6WFHucdP64hSsmXX94cZtYwz5Jj5RtSWRZVSEPHa4njCMMpvsDeHz9PYmao1pzMPoaVusMaimLfECGucNX1",
  "key2": "Xcc4jbMSE2pkRs4WYju5JZyVBv1x2fFPDVh5tAP4DoHnTjkSNn8ebig1uiq8bpKopiXPULyRyRkwJC5KBgZuTVx",
  "key3": "42c5sQHAR5YVhDvQwZ3ptLzGHEmVpzPRpQj35tCuPMK3aAqy5fzc3S6wLyYDCV7apGWFDnTdpyKZp9Dwb1dwtZA2",
  "key4": "2u611xwhQaMpiRMmTx8SVzx4kKGP9UdW5i8ZWeJPvFq9nU5BD51Nqpz37N3DgozW9NbakKPdo4KwWqsScpYLvv7Q",
  "key5": "3i9ig2eXpJim3FVaqHso4xfZ33V1EJ5tPBbJzGT5fbd9dq3ryAA8utTkuTZ2VbEMi7eMPfZoEZSGhFMHww5rzFUz",
  "key6": "59UTvGuQjGshfynekSsj67XV5N8u6dBcbpmArLKU7qYLH6wr4qAacTjxVAp2hU1sqqSWzNhqvMsxkrbaTmNamVk7",
  "key7": "324R46L9455fm5K21x1tEbH1u4CYCc1FVN3ofcU5tCCDVNs66r8pDxoPcBjuRTnpbbV9ezqTPBFbMsKBeYwsgQqn",
  "key8": "4be1vh9DUir8jjXGhTiRfaKofgftjYPCaaDwGKJdtA3qVqcExfms31u7ZmnyDQkZjyiunfenppd4fnsPMv6PBckY",
  "key9": "4ieSyQWqdbdYqLbbRJntJnQM3YNzsYSfrmF1j2xQ7FR4m7ucQry1s5akYWp1QDa2UCCVHWGhXeGDQTPbWfeZXV59",
  "key10": "XFp9qUxKtmsLcRjzCE8QzHWfB6kjSSp9Gph91Lj3Q18AM7XPfrCvaijwEWuSnBsWtt7J8WdM8h6f3JpUji8CQ37",
  "key11": "58raLvk77B4DitJyr9psNt7Y6a5pwxy6yL8CrYXTNoqoMejPy4PxCX6nb1fh5nwPpVhUVybvm8HL2TapKPq4wm3L",
  "key12": "62hWJycdx9cxgxPMh8gTQ6bxtgQjzvyEP349SNjfmk8tm8YUbDQXDmAxv5EZuumDdDUkN7f7VnXvHzcnjwWiryj4",
  "key13": "2VnqS9AktPZmDZPPQn493TQo9zWPeS1QMPhyGN7sb8iqDtQx6ATGLQJZ63goTZpxEwzfQU3uzUSYFE36rrRNC97P",
  "key14": "4Zto8GJSMBS9yBPxAd9U6LQzPoxj3ncjUNJ6VmKa7E1uDGEfQWTK9VLzCdUHYNe5iA3J7Ef4WryvqPpbLgorkQ4K",
  "key15": "4tfCHv19HdcDrkcbg5AeWhXciuhDaHbZ1hvQsx1EDjKMpHZHyrUoWS6o8becVtUqocm58UopheqJ8YuUuhe82CP1",
  "key16": "v2Vvg9Gv4RFYagsMyJU9J34NaTd1J4aj1noBe49sdtKBcrnXJwP5Um8uAn7w4CwdAcgWxTcLCeFKcr2mNdT5Hzw",
  "key17": "F9eADKmXyUxSuUaHJnBFhQZzkCsgz43ikFRs3D3yAMrNPE7CXVz6FEQma3QK6SBiUQ2pSzSSRT9a6MYgTyFH2mb",
  "key18": "ztnGb6nUa6jUSDj4DwKxgex5N4jMuXmWNobFnxM88fRAddvGJNk9huFjjyqqzayzH8fbzaMRDcyiKUJN6oSzebJ",
  "key19": "5LSMD2nU6JPyaAF3rtxtHTJwjwH1qsbqAwgzwHWbjF1rTjL8tUwaETJbvV5JGHAhdp3QTrV9UwgEn1Sr2YcctAcy",
  "key20": "2ar7LYHcGG5n9mMd8cPaZTgSTTP7XEWTMXR6pCByDSCEj8WrGkxdw7iR8ZP7hr8DHLuf9Yq2sj4WUk7mwsWLAFQZ",
  "key21": "7e9EJYrQRCLBWStkzjR7Xvf5SfmBUuwAGPmjs1p2xpAf3RoTewdv4YWN8ks2WyZGaRi9THqJnwhFbgmttJoFgXK",
  "key22": "5mbBxBu2gaf1dKTk8tvi69T57ajkgpTfpj5ks48BqJHatidKXDdySZczRvYcw9yPqxq6XLTsUutqEGYXzT2it2UX",
  "key23": "26vR6MM7XCe2CYpj5vsiAU3s3A1FnFxumJxcqopK5rgzUmXWxbqiU8YR97HJanSdA2rw5YppdtcsNLKarWeGieeF",
  "key24": "5tb8DfsTfCKVSii46Bb59LnLFEfSaUiAvqHNjPczUFiBRsYZQjPLwavwppyC8XkD2hCPnJWMHSr55Euec2FU3eNP",
  "key25": "4n8aPDmDpdWD3V8oWPXyeWhhN2GhgYWognkmzBTjtfmXLyuJGWPLnFRiGs2PJ31Ds49EpMnvzkictyRbaBc9GgJ4",
  "key26": "3MUqZQSqQcEKmLVM8AAxdQoiWi6LSUTPBv3JmW3aeBxFhYyy22J6hvMgtHRmVcz6Z9W6jfPMmstHAKcDMjV7dar9",
  "key27": "3ssSjBX6TJuHy4rt1ciuX96j5tURa6hnNPDavZtfjLhPNCKe3vsvrtNW9MvGNQV9pumZQrykeNLkNSnLuZtnAiLD",
  "key28": "aPNPo6S6ZDLkm8NLStjwDNbgw92GUqXeFRM8qMsar8V3n2igtET8WMe8f9LpeADRSa17d5KBPmigvPDGpKoZfx6",
  "key29": "5DoYncy9iAbhRdKarJj2xFSCppCY2cgQsTXkWenp6w2sZgVP3dY1NArc7z2n6wX1CaWW3XmrX1ugsNaDRkknUf2Y",
  "key30": "64WZvi96NjtPk2KbvMSTEGHwkgDhprRccqPEac391XKz4eEnNn7Jehye9URMZ1RhAVS1MbXpz82d1hmCBpJdUymF",
  "key31": "3b8RMgzjGjjDdpsNcRHqdxqJDHvCqR3iNYKSjyHtmg2nXFrebyFyskMT4ztUPRckj2EmY1ZTFPvQL4AGjqKh8QvR",
  "key32": "28hjVeXxEhBaVytrvehVd3xPjdYhHBMe1LH8BeAwYdsocJFjJ6V6RWUGanop794HLdSj1YEvNzKuzqQwDvdL6hN6",
  "key33": "48aixFwNGYk1xHK6jyFs285EmXkXrnwFMgtu9S8iNw2ZThWuSsqjNksViHGkYUMrWUwWFYnPVHQu9RXRXbkvj7Jp",
  "key34": "3hFofRyrSJcfoa9EmANvg2tVFYAfwaUok6YkVzT1wmPPrBHezh6K3rfiLgMRoydSwMrWKyCbDdsWrSQNtbDhoYxM",
  "key35": "2FdnqACuFuGdPnbHJeBy2c8tzUXTR6ZAntDsfdAM6dy1x8cTRdKx7rKnEo8RdSSVCeuTix8BCvPL7PLTHnJE9X1U",
  "key36": "FTbtKcMp4LqXQ4aJfs6yFh4Fiy4fjpaxnpVU2FbUMDaMtuwgqK7hpsS5xJJUmDHXrbLbxTiuTEhc1ZXqYa2sKss",
  "key37": "4YmpcoyezUjKVt9avF44Q9Du328PbVMv3XeVr4SohLTYJ2geYmngxbo5kPij9gQAjGg5u1HvwSsAENaKk7k1XHD3",
  "key38": "2UpykD2rYzRD65CwVCvfATdn4xuF9YPAkKw9b4LhMxT8o8pzK3rpDm5kyLfn6pFwhcf4z1YJBa5NHvoaZ1Y6wDzL",
  "key39": "jPevAFSqjf8cZ4RJHJP25LvwYnkDk9ZK5kAPPEfjUB24KTWMJohCetJszcCk5F5UDaMyq4iv6vHXN7xCeazkRpq",
  "key40": "46s9omt6JPv3dBAoZsGEbB6h8iS5r1SHdXXZuiRtFmADtYnrj8d7xCp9fMfYB3zRLz5VtnS67ANBekSqCRXge5gm",
  "key41": "2C4eYuQhXCkZbL8VY9P4uv5KWWphwNfiuyAWK1GrnvBetnq2wwEv9QPUo5XQwkfAED1n3uM9EL6NcA1DjnCSX9GG",
  "key42": "3Nsfkq71MmHX55wsasUw9DtHfbB7tMvzrfVuzUdTu6yP7e7YvKU4XEdTsC9F8FgQRFekZyUUo6EWxzsFbAyWyvpo",
  "key43": "38efKhjaKf1CxrkMonkWadv4bPRbBtrubNX3fRjRckBz6QW8ThyFuH2gsxjdfCANVToZthhc1HP9DKMSHuU9fsCD",
  "key44": "3F7p8v7e9P9rXvFj3b48RwJHFbAReZVyHnu8YzaoK5SS8iQXGW3u15HxP3rAfaRLAmZubN3P4NpXZ83LMBtX2r9z",
  "key45": "4t7nfch2414Db1gknfz9DnrbbojyKCSD3PHxB4X9aQhLkQzv3Ax9upE5GeXAUoEm7U8d4nCqXfWypWEhffcpCiua",
  "key46": "39kUCNwqkQ1mVLx6pLT1BL3Q2Yxv36UJ8PhUniTf2buMrdu3Y4JoDzUiyPm7WcjphR1rtxgCmdjv3cAjYQPPWYk7",
  "key47": "rKkoimxsNEJLhDG6LJ7jPDDG8AJKeD67PR6usVGg7kti21j41wSCa5gTFgnzG4T2DRzw4zgxzjU15W1u86n7f2X",
  "key48": "2SvkrAqsArdJuaALgDEHpcjMcTmTrXLhak2Q9jCf1VDcg1QSQyfzgc4XkcvyW2zGzHspswMLLUULWnJJF2KfAvbq",
  "key49": "3JEaPPpoaoLZvgBBdToAZHrqmzWcSEdA9fNqFdfAbPT1YAiFtuuwdRBw4VCKaQAaAXM2m1NmM4BxDbjs81PEEFuu"
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
