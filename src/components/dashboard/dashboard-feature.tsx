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
    "3xtFnT8sd8mszEqmjuxq8NKGMLCTnTLE1rPhcNhQSrmWYV9CYvefwmsjNzNiyMmJEkudPXM4wkJ59weuFKG7ebyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tn52M2SKVrmk79TPuGEbXdFzjgUbcVdZWM5NsCwktKrLb5ePkUkiQCin2dgCKpecM7tGnMiRtWrty7SeoDbYmqY",
  "key1": "5tBJJziGTY3SuGC4kDqp1GpEWDi7THNLupMmB5soNTChuRDbLhhtAM4AYYstQc2r93zrLPri5rMVYKzgiWq7Q3gy",
  "key2": "2EXwuZWbDYPr76bSV7szJh8q5ZmCCA7F8GgpVpM3jJHwreVcHcMYsmCZXvsvHb4bNFhvf1Yirx4vyazixBw6cDQb",
  "key3": "4c8hdijVHU2FeFsB4tsc87WFAXys6HSDG2CXGHrPQrgioLCiAYS3e215aYHfZZE5r65D69VXXshikvMndjnJY95K",
  "key4": "3ZPXjGmo7rKEwXBruHrPpYF2QY8bZ1HgMnbfbcxcNZHvYx5nxvxKM2Q8v8r6Tp1WaM9rDghHxqdMRYaNk7fvDvy2",
  "key5": "2EphTWocG4ijExy371bLCpksPoPm7WaKrjBp7eEBnmGpHueFE9aaJbo9rL3ZM5ZNa1HsFhny2jWfo5wDVJH7GXsL",
  "key6": "2Lmeo4QppPreXR6nx5GXEUU6L1p3aWM4cXnc5zbmmKDq5pFCSVLSvCikCJ5MpUrfGS646UK7zwDicCX8nfitDYoe",
  "key7": "4uzTYqeRLgz8bLZce72aRZ2TCDksVvm7Qq9C85aykDCcZNbkaXXrjPf56unDZJhMwtf9LJuSHcYsKjKZTarwkwEK",
  "key8": "4s1e6kbh7y7zWDqmzbTmXLJwV77LLrhD4DA8nZfo4LzKa9nnfGXrehBT37n7o5McUEthiwmZr7AWVZYufGr1boYG",
  "key9": "5BvuFB1x9fEfiNZbV6k91dB3iW8B1qEqSQ3EBsxcEQiu8esp8itZKiSvphk3Jhewe93aUmaRifUpM9ojK3wES5LW",
  "key10": "9EXcCRnbzndV28gqq1Lc5Kjpsi9QUGcbzkz8kh9phDc4VhS8BNEguXWw1Vu5yQuMV9vMmMhFQpkCbnUNjBfbp9f",
  "key11": "2rAdgPhomjvHTWvAjh27tF7dAF7W3eceYQpGBkvgUCjzctpbUTn1amrbNexC9Rr1iCbQHVRY7xCaDykckbnLTR3m",
  "key12": "4fsNG1GwKzjHGekcPPEvkn7Ean1duuWH4xThGZzuqAVvuKFKr8xb2ZHdX1NWA5XqLdJBo7BbNZxzwxpx4wHAXRh8",
  "key13": "2iLDA7hK5P9DYSKog3z6gWVBzNjS6ivYXSHoyyWevgoHs1Lx7WUTiioaRdAnJcUGQHBT8b2w5MMWwhUNeUU5gJMC",
  "key14": "348RRGWp6X1LmmFESwAonQsQcddhrhWmdSPzsfz2gKS5srbvANDZMaFLRn4JsqSAPVfNnsw4W3EP2xa9oHtjpQGL",
  "key15": "4nA4ucM6wP2RDwergVvpt35fNnWQVf44m7QaAZVCm1phhxakowoDnNpv81oKKibUJenCR4zzHjiJvp4t3yLHxEbF",
  "key16": "U2HbBfrsWvFszKQm7FzMEYy3TdCzWECLC9hoNsQ1dM4dFK1s6UXpUkmzjEzoeQRyb89RQaxupWqZYvwpBmgnHqf",
  "key17": "4V3j2sEHDS2ch1XUfGaZKBRtcQi4SVzYRP85PhFCGCC7G5VA13N8VCYdTuRev9jFgvd5V2ABiNHJcgndeGJcyhoV",
  "key18": "jfydidUDVPuRRQo4iXvZs236gbhB5mminozNT2Kjv7SSvs81mhbxyQ52nKUu9ZknunzpHNRX76HRveMoaKdir3b",
  "key19": "2KmiQqWbxWPzBsS4axBJ9G5PKBPaibDnx113B52YcKG4fNpymnnoG41AnsotgL2YXrcoS8WSMU2pZ6NAwJmHb1eA",
  "key20": "2EjEpbBfDx3kTZt6MyQ1AuWC1c66aY5NAawYV5Bgof5zVomEWeNzVAzorhm1rAHhE16uBatHPKVPipyG247Gk3N6",
  "key21": "5qjmsweFBRws2HtiyHmddNVSjevwpvoJZp7HcPS1UotqsE9H3GMzSGhu7GSnGDXcb7LTMx8MT9GzPV4tdbbrbbFd",
  "key22": "2v1jwUC8U3D9aauQHSUZToYViakUNAdPQZHbUW23TtyYsqidBfag83bxbBVMiHVYaaZGPEhLyZm9YYj4JKSRYDon",
  "key23": "3hUsRxk73Fojo2pZrqT8RPpqqk1Z7C96BBE3CD5VAuAxKDKNVu92RVkJLuA1EefJ2SE8oXxMHapogNmNYLadeuRt",
  "key24": "4p7kM8gZnwdZYsFBG77tskWUCN6W6ZLyobUFz9LNnPFpC2s1oAcQwNZ3XJHudVBD9pMg3DmFuuzRjtA4HoYbXqHr",
  "key25": "3uSr1PLNjgasxTkuHAevhH8BpdgesTzQAjtrgjmUBKHDntGNbVwXMr5KBAjtmH6URYhhwwrju9Kak5oUhmrC4XpV",
  "key26": "4Z4ZrRNgHUH1fkTbydr94gcAktNW1pZZRTMnMAQXbZXEDCZ8oFY48TKqSyhFuhSiwmHAdCPVvieE8TTy8QB39sWt",
  "key27": "4Ryux7cP5aG34Be3eeo3ky44spCH11RcpVsCUaKAuSok7Pi9nEt8xrH4EqfUp3bmTn1raFvtEi4cpjJMKPdKEaTB",
  "key28": "ojZpfiCZCE2yJnEJWCJLPrbSYAcQGNByeiiLapdRW2YrngY2JJzaay8NBm1GQ8HPRxef4UdKsD7BEs6psfTw95v",
  "key29": "x1qsQq622rMKBXckZdn7SftjQmWV1jtG3uLHx3z4rpz1SBXjUKcqftwc64SyjHm8Bu9dbXhscCkXjKV4GSxvqnj",
  "key30": "So9NkYSLzUsdfEXviHGkcokzgjcqb6ZWdkWkgubC3i4DciSrvvPVasgtUhLewxxuPC1eie74Vy9RVDn1z79ir57",
  "key31": "4ZW2wYqwspkeWgpX8wpZnogStue8XzRkENazYGrAAJa51SViwLEtSmnLVXooaLaFqvMoRY5TgzvGDxzGSwMb7dRF",
  "key32": "5YzcZYC2it7UXxx6JQPxJGLJ5P2zuiBeXJbiFEPBuHZEoX4vsJURZb1Cx2J9jd3kF4213pnFE5zs14cekGeTQEff",
  "key33": "2AZ69qL1koSgebJwLkGPxQMzLtNUASEoaouUp1psmPqTUy8oWR2CYEvJoGQwaCn257SmU2taXLWpjR161hJ7HQ17",
  "key34": "4aQajDMxyQpoXrc1Y2n2xRNjbM9QZX5Z36UfW3YJ4pEZmMhm4WR4tWvbxvPWnjFvbYetfy5M4TpmhaJsZ9tZfGDv",
  "key35": "HpMYaAKuMchUmsFjNvDAieXiV88TQckctJZ6EaJ6GFqPutWdwnHh7szofyjFw3yLsv6DsDGQiLZPoicmf3oqdRQ",
  "key36": "5hjMBfAutRoEh6TJhCPdEDKA18doTKGruJ3fkVwa99bEq5Pzb5zBZXWvWwtFMhYTrUutRiUMd89Ukss6qRVivQe1",
  "key37": "3x4cfiCw6CnDTR2HyPdEyAJcwLJVvTaSW4c4AHiFwj3VBW1MPRCWtX9KypZ96APvwSA8NvxDDvFAgZZypk6PnY7K",
  "key38": "4BzxQH3VG7iL7YKrjyHJfyTxG7zjDLFiqzHgWdvGeqPexiZjp1cuvR8PEp2RouQRNLB3i75z3hEoqp688kphUDSW"
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
