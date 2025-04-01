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
    "4JzmaNBaXA4yzfPzg9QRwtHHYpNZdFzwoZjs6cmxrYw5msaQMSP3twqpKE9HbbZB6mM3QG3KiC3ybFeW1ZWircyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDatEowbXNeH5yinod3icch7mPFec35wrfmh5xzDxbMV1XobBmaWwqCFPB5pFsRP8XbUEMVPZ6eN2BVu2e2qosu",
  "key1": "5sKVmMaw8y4hXzvexYW2aMjgbRG1wfx1MNDNeoJjJrLn8QPkSW8aYdWnUutbwAh1up98ryqdVBDkyF2GFJLVyQnJ",
  "key2": "55ffny1gFj6NErRjDv9LCdCnrBbsPVAww3WxrjUz7J3x9niWNQhNce4WMWND6mM8uckzv6ugwzsGupqzsmVndvXM",
  "key3": "2EEbExaGmcB8YWu1YYwhyjV7znfSiHM8KjF5uUt5gm9arUEBC9PoVw2ad5QD5cFYaiJoPPZkLruNk1j49EADmn1",
  "key4": "4qGbFHZzH3wfm6a1oFcSKbFZk2iPckfAdUFcoavm69DdPbjUY7xvkR5ZXBkvPDZ5wR2r8AaVH7ankBCBiLcVXc6M",
  "key5": "3N5wLGvoAEvNuxpzJ86Vg813yrpoFgJnPMedJRijMtxe3W4UJVGtm8oc4iqmX56N3EKebFWUGEbmykT44TqJoeXs",
  "key6": "4nSMnotMepqVvqQnDY6U3HF9ADyn281coFhrCA3f9Y8hjuVkG6TeowroSmf1jHBANNxkwtmWiQvHnbFNs5GhzwdM",
  "key7": "3J4XbSnohK2NB2YWcHbMiP61Pp9JHNbNoMbNjFk4zogyW6vBFZ55fZ2YnTt8Kwxd76vR7MSjifVpP5pDtQCKkNxk",
  "key8": "2Uzo98BoZTZNhc1K3qKsvSrZkzD6rSGdG2iYNUzHdzM8ET4zUMGT5MyVuztQX6z7JxgsatU6frs4BiXpVm6qXoyG",
  "key9": "4QXFuYfXeikUjHc4p4cCYZbBYfnfTt1RMSAuyTSvg8jYPPR8wwqASpGHWPSKrPvn1pM61bGnWbmtkAWZZiW4v7YZ",
  "key10": "ViVEZTSYcHJD7rseNy2KZZK7eRoLHHwbHP889K5vBPTR6hXbn9V8UvA7wA35Xgmbu2uTWcN5bgq1yxCQdR8Rnru",
  "key11": "4ivwWyQFrPmn2Cimk1jCppjPxzw4Fn2E4VVQfNPXYE2sKA1TqRgggDNvkaz5ay62FAieEuqmgFu2ahjg9HGutVJh",
  "key12": "2guXD3jG672e8ekkd3KQbsTGsfb4AwG46MAP2ovaYM6h8djQ58zD2AhBUNrCwhi1KhRmJRUicoUgYKXoRPsxsV3g",
  "key13": "5zDmrEpvzBdYXKMHEn4odxLr3XoSfXJ6arWptqsci8ec4AdwCPcdSUADTwBQzhYEDv1JgYiMP5Ecpik7yLGsQxy8",
  "key14": "3i3Ki9WawtuEe9fFUBihV4eX4Br96ZjCXS2qiT9G4sACYBrhkXetF4M5wbeohMwk3YwNBQDDvBjoAnNNN5AwMwgm",
  "key15": "LH9BSjguiFGsWxhXyqEdS6fCb1StJ1ZwPh6chJHwewuyxxDmsY1BWFDJyGFWN2798ZsRXc1jvz4QHYSFPbJP2D2",
  "key16": "3Uvgu6ab6mr1CeNCckus6sa3FRNv9caK5JhQ5bg53bovrH9LUsfA87sVrpWr1Wn5wM6vPwNjPsyMEun13rHAbww7",
  "key17": "qq9SyVEFRbG1mkqvcj1S9p7MR27ggTuTsxzHM4GAEaRNKj5iyN3CETLPxfAd8WaExffkbK9JP9RYwZ7EiMpin2k",
  "key18": "3LQ8yK3x3nxYudghYpZF8vGnbVqdWXBhtNRbmkTp4dCue5hCeeBDiyGhzAHFaGCtWrSJ1BMViVhRt5Cm2oDBDkX9",
  "key19": "5MXfmCwEEER3M2fLKj1A1v6cLHjXJ86AVt9zsUKa63TcEiC1Y3qZmxYRMn7iNn38wcABFTvqF9yGj5CCYSw5yN8T",
  "key20": "5wfz4c5V7avYitqbj4XoTVToqXSeHxtTYMZGieDWW2SKhsFW3gLiXEYzunwbTJuwpazFoHdZEimZNrzuY4iuuJYB",
  "key21": "3WfPZKVyr9m8K7fe4MYXxHKkcQiWBvB7cwfTzyRCSxCASurm2TxpEmxaVv9K8pxFS1F9fNfkMn8MhxBnL6C16n8g",
  "key22": "w8RiaxyFWyH7nMhV5EPMm4A6PvZRZjW4qQ23drVFvo3keKccQ6BUZygYkxzucTJ2PweAAJ6byWnyeyvuuyTxgkS",
  "key23": "4x7qe2XLENypRFfJ8japLS91UsZyjFiER4cDiC5Mefze3w7J46usFCLnSCwzjyH6kR658YjDPtq3TCrkpdDyyFG3",
  "key24": "3oiuH4z2dbGQrJbvmsAP195aoFaUP8yTMQVVGWKhtakY85w5qaaxtmesq6WBLZJMxcMmtrXtf5oy1f8eb1xWQmQr",
  "key25": "47kCb5CmGnnT8z1XiXeXUpfKjq7T9ETBn1g6kbwbjchm8kYUgpVgxWA9wimX87xMh2jxzRcBpGBXUjJJFqQ1QGTX",
  "key26": "BsYQk2UeZW9atPxcB96Z18JCh83mKKZPxmiYXJDZ3tavZHv3kT8cfgXocNmt7PRHJoBKtRcxmcbJoB8KkDoULwK",
  "key27": "4cByWAEyRr42f5Twc2PxogZUjmQubsWMegCwq1vAni7vxQnLCHnk72BNHyPpoEBUsKE16KRNkdgob7x8dTR6Bp4P",
  "key28": "5QJEJYuDrX3TXPCX1jLN3ZjytLkx82AnKDQMkHQeSTapLksXDPq1pAGs2jmXrgtpXiqJpEqoP1FCsEHA4bgYPwPb",
  "key29": "2LeXNVnCUoKU56rxe8PG7pRwoqnCyYxBrrB17cj2fP7Br7s7namuQcEGudpoiKhc1gtRzzDfgfgiv7Xh2YQ7L4mn",
  "key30": "2hfSrJrcUFyNtS6haPv8msZpmKcVh6LpwBevnyQeDAzpokh3J1b33htXFEXdJzPF5aQ8ok7NM1aYe9t7HYwBf2MG"
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
