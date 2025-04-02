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
    "3D9GJW5xWoJXiXn44NJjAQAmCGJRhzxd7XaT6SFeqEqFQN25VLtXPFD9zV9tzYExW4iZ1tbE8ayjxifzXa4RKd7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C888HyNaJEGBK9wTi2g9sfXoRbUVrbWAJxnKPbrN1qr7UuAieVxxpyP1MqbRS9GF8xJcejSvb8abZihKr87h1a4",
  "key1": "46NqZTwZyffguEcUYM7zurEAyovNBrNgwJWLGEjXnsdoBgRbAxwwU7eTNgNU8EKpyVXkYhEjQy3NwekEEnxQPMu5",
  "key2": "29Ndvx2rGsYH1KT1DUqYBXMYQV2T5ixp3rpWAoXM4mTm2jAm3gBJSpb1fnTaiNsur9hWWwmfgtUL5BtNaWDrgVBr",
  "key3": "AcjaN4R6cwq27hp84eTAjyPxmW11Ji3BFtZuuFCiGo1hu3VXpAcr92AbL3cX9FnRF1bpg3S1kPJBtGz2JqY1V8b",
  "key4": "4orjNzTbxmNajG96FQ641c8SWf33xS6PmjJBJhJFgCAGAvPqWkxHMALKRTuK7dQCgprJqpnuzvw9Lx1UFb2ZebdX",
  "key5": "4pAPpusJTdjPAPRpcHF5KhRgfNxJ2sTY4mCQWMBuSuH62Wb4fB4CsjxaFe6fBNqYgp6BZT3ofTySnKU6iicknoKM",
  "key6": "3ydmqGJwk7cndhVUDmiuLuTW9iUDFwprPwoLojhEYvp4DYW62RASNXQbrxFmsUwnMYjmbgPeVaBsSDvi8M899sgd",
  "key7": "2MxvHL7ezubS6RcUDRtMReuz6SRbwLZorT9yefRBtCv3NCVZ8hxTpRYfPNGmYmyEKJHBcMKAj4UmeZXJEvr2vG3f",
  "key8": "48sMdAzypKhygFK2EqVgKy9oZ9Rz54N9wR6L3jRJ7AaMVHCNkNEqRFzrWnF8UoWx3vARTkBbXPSLPNNtcXPKZFkX",
  "key9": "N42exPYEXsDStSw7ZVsP8zTSBWB14D7ogEnbkE2E8FHrc1odQ7BUJLwr57i8gFhMaV2rErPtocpgVzNqgBcU5aA",
  "key10": "5BMW8kJA4wq1oXQ3nqRbxjWZhEbry78hhmjVJZwtdTajM5CM5UB8tQAWjitgUtXTbidcYt5ShUGKyxDko6Z94zg4",
  "key11": "4V9bJQHKiTsG5J76TdMrxVgw2JfvCthfmTG3VTBcD6HCvmPXPYpRb4urtcjRX8er9Wq8nRea9towKYXr2QVuh9hy",
  "key12": "2TUMEAUBWjfQoXEgVCBG7dCX5genvxBEmPoe2UXf396RtHb2Hok29QFksMJNd63mr9cG7U99eq1CAPCYXKt8Kjif",
  "key13": "AVtyGRLqK4pNNQ9omG2GaZwGvPK3vwkhXnpB6TyT5Wsfk3g3gz2uPZHqFEPrcbyHbRXbckrijzatoCapV3Ue3Mi",
  "key14": "dm9TT6tCe9USp6C7Y1ZW2FuBKCUfdUu74f6dYdJGBS3GDnM8DFWFVdvEGKCR9jR8jUZwym51HCQS3VFoAzC3mCq",
  "key15": "4HtUHQfTBr1t5gxyxGPeZ1B5MWQGp54zJnnQ925WXh6XZ4zkoqszz1peCMn5JdhM9XyYWh4hKNdohk6Sro6VbyZ4",
  "key16": "2t7rEVVqWQFELjGGoTJY1LmPpdaTWASRoyz4WthrkAWqt7KZ59HSzLXRxSEz5Mds7nRKpHrBJEXrY4tHz6RvNnsQ",
  "key17": "5Q3F7sWgSRye4GUDH7w6UNqf9ySX2AxmfWjZbjDqBs2ZsfJo8qexSL2m8em3P9kQRe7nRzf2uGHC1LXi6E2Mpkes",
  "key18": "51Qprd1i1eEPe4J7ZTGhUjhR6rzidA2GvRXsDCihzjmHZGUipSKNTU4QpQpWLHzCknSswXL34tqGAxm7PuAjLFAJ",
  "key19": "4st6ZspkUxkSbzMRKWszVWUc9KwdFTBVJXR2p1mvaiuU4cfnVBRzr8bjNBQniEqYN7AyZrS2YGkNyH8Rw7YChMUU",
  "key20": "5rjc2jMiPavcDg7BWXWUewKGRP4SVZi4fdvgDF4N47Jr5yGVwdPCMjWMtcq6jAfTSVcm2midcVYE696rCB1YR95G",
  "key21": "5Piw5KaXfE4mXFNqLbBzhqagbLFaE2V5R75PKjRg8vxQXzz1ex5SGXMU6djxhQuUURaL2CRCaJkUk6sdhfm64Lu9",
  "key22": "4ojDrCsbjSzW7i1v1BHY1ittBxJtT7v8EtZnnTXJHJT32NWTTepV39vcbSp5ZDgt2jLCSpC2TA4qkDXqfQGR6nmr",
  "key23": "461ZmpFdqAH6tXDhcVYERRNHPyryB97VGi8CJhbdxCbkJr7x2jkgGqQ3yDrgnJY2XHhTWCrF5Sup5snNQoj6WLKo",
  "key24": "3N9LCipGToyJ6jqGvYvULqBEmSDsknZG4UyAXgKdEFN7Jpym3nSYaF4xo6fS5xwxUp2nB77LL8Jdb5WduVnfjueo",
  "key25": "2NtkT2YLh5CkhKnECNj5RyEEXdb5TW2gid2mg2CrxG2Yt1gD6DDuD6bhqz1GP1RwjNPtyjjXuCchXfwUVMHmQWKN",
  "key26": "3hGs2h2KauyM47EGZS8xu4ZavDiEdCmkJT1XSAyZAabeR9R1WdvofL5UEsShpafUM1qbFBPjgXGM26NceybBCJJ5",
  "key27": "3ZZoQXSpDAuU1ZzUsZnT4G5seW8f148pesPugSPWi9we6WohXuMRCe5k4tfXvpfTzb3jtJ4WHzphbsXE1DYa6WBw",
  "key28": "3UuiAGyAdQSTbBDNG1W4zA28dgqwBxEbWDDdMpakC3ZdhZKw5vqEp17NvSeqyyRFVTnh3WCysuFggvgRVP7V3Lq9",
  "key29": "4XfdjNLDDCPnprHg2Awr357oGRuZ6Sep7CVD1aygbdUYCKHM3bXZYwnYMhA1HHBmZLdFiwRLecCLDgXafNcvz56S",
  "key30": "2DB9qLWUgHRM1ccLJk4yBBj8Ni4yLidy3vR1tzm73Zi7A6njP1ZpWati2UEQMUK68rtwh79yEjWwHcnku9hyoYCm",
  "key31": "2E6H1MZEnRY95rNgHjAztcBtjhdc34WQvRppfQfsojH7WbXFDARtMTdfz8m6wm4byyZeXqQCY7NiAUSsf52ewgxg",
  "key32": "495pbjWTziNwH9Ub8J5bZWigvc6LBk1vNEBmy6qC5R35K3xvN8r6z17GJzYN8GgRNxYNtE9EiTHD3Zk5d9dciTKu",
  "key33": "2xYpmtrbbyd7o7wamSrWF7ETACQoAzk9hkJf1PYvsQbNRH4bBZdiuH6XXRMQzKvT14PBBrqvNNPaRCc2z4vD94FD",
  "key34": "4dTxPge7Y5di2a2iYoVaciGsGSRrSCSLbxnNSwfusoiA3wq6nGH5GSYPXTMcjQ9hHvcGfSnEHzV85y41nUyFBE2v",
  "key35": "3F7DNv3Xbkc4BccLqMhKvx95Gvfn7oywWQsJWaW7XJmyw6iuKdz6vpS5tUzFMc5Aru1GSkmNQJrCN6165gZtKXco",
  "key36": "4nqMEBxH8aAM83LExX3xzRzzt4RbDt8GiUwCyv4doy87isTbFsfvcU5pkJBTpbF97yhuh27xtZZ4qHzJjxwmFQzX",
  "key37": "5F4povD4ykeGhV6ra7hkC4Nkos5RyFCnoyY8b58i5S981QD2NxhgmsYX62DKCCRUMbfTvZvRJkvy4qqEeyMy8pcc",
  "key38": "2czuYyUFrwDhGd5RQy9RCUX9WFyxUQK5dPVJtWrn98t4M9x348Kz7i5oszEyjgMRvn4yBd8eKfxRvb8eqHFJ4rUs",
  "key39": "4aSeGA2bHQ6UoEGcPSoHMfRfkdWu3MvQsgSLVAeuLU7XTrMFXTvsyrYn4ERNCxrzvP5A6gPsmjrR2Zqnsk3v4KZu",
  "key40": "3BNwfHHUj75h3eS1tib4RzBzjjtCBjAGWxfgWtVMoa14FWbcsVeWG7NfnujsUgAGt7sSWWQ7qQmZMxVfqsbnmaKU",
  "key41": "4hGZDHNvTx2RSCGZ5WNG9XyV4NDiBZfaFLFdHXPTvcdnVrEfhB9tzV3mwdc18jT4furjRhAPVYeSd1QBfwpyANFz",
  "key42": "3j9VeBvLn2eKqR7y31suof84a7nahoUjmA9N8zRrGE5Q5wbAAYeLygz7fJERVFfT1VfwHNdgAnP8rS2LfCCYDYVd",
  "key43": "3egMnhG7vf9nyTgoAv8qc6N6pWgD399Lijukvkrr5DKrT2QDiYNMgBe5pZnNiQT2cyCNmHxDmguuAyrRuv27iddU",
  "key44": "2FxYUpW81oniXDPj4e24dyMaiXhA7gp4v97gte476AkYNzFgaHE6k7UeDtMH2uBh6USDRxuQS3dXGdfEEdj5sJnf",
  "key45": "2NFtZVX9pykjcwa5ivZi92B71R9hfGC72aNH77emH6pDbnABbDQKevqpFBbQsgTTvYDZ6HTMsTVUVQ56u1JGggUW"
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
