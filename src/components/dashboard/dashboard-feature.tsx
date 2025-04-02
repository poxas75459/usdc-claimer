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
    "2xaH3Q9775anFoqhAZdrPCm1asVBKA87X7xNCo5MSqMaKLtBTZuDovaXqLFEMuY4tStH3AiZG8VjbeQmYJ7C6UCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FN2LKfP9EjwZFzZz95f1UEUQrn5UCunFcmNUWMsntPrBD1b8G9N3w34PrAmstd6rsk9Dywf9H9eWxid7kWPcTHq",
  "key1": "4KmkQG1woFCtxUstmj2CcMhnZrMEEnPPDVfRXae5iSHXnSD37qjBrQkwBRwNKLs8KfLqcmuZT53vtD16mkzvgabS",
  "key2": "45YeSDCdhHrobMnyC3VpRZ8fcRuKR8b9AkTEAn2nEJbSZAPku59hFN7vgfcVgdDmuu3SnGvf8ZgmDTsNFQaMLabN",
  "key3": "42WyAh1W3MhcRPNUp2MVZrK4RrxXSRXCyVUjcPSooGqS8D3aZHiHYtVjVYQitjW5TTHLvMnodKX6dpEM8tq5McG5",
  "key4": "563sVcJN66SfgrKaQyraXvNaoGU3ra1wEjVUF2QyWXXdHuJotB8XHuWjZrA7sE6Afi7JhQv8oPqDe8GafZjbjCDE",
  "key5": "29mLUVtrGAJDnX2tvnaXAwfTxFG5BKtTLoiZF9xQ7jpLLvYsxFGtC5Mck2G1gzj54C8nakJgRazzv3pbkAnrckbL",
  "key6": "51vv3ggdbG5MKiRRysX55SEr8kNu4TRrB3whMTSHSiBUhMA9kaQeUUkZB4mHZbkProKgcfPbk1tEeQkB23Envy5b",
  "key7": "4S1amm6xAis98aDSVDPo8uh9jb9YndDuN5b42eHtfPnvBqgnR1Lnpk3kzP55iZaAZiW9fba29mKCGuUb3DKj1bNb",
  "key8": "4PxRo4DU4w3ozDyR7hChXdAXtyAtUf5xztHavxa9TYZGLUHcLJLHazEXrRgZnGKPzhAc3gdx7szd3aQ76vpdybQa",
  "key9": "56rhwAyMm8McAPJG7y49XFzhvajxJgHHhGE6gEf4Vz1XoWzwTatBVoAYtnp2L59bvt66ARC3DCibSAfomarpS66p",
  "key10": "4tgQCLYDxBLFxqDiFzr3EaaHjzpQ96WBZg7WuzZJ3qguBpepqmdHVkYremy8KHaQUrQrixryq1BHeavtkXaJsbw8",
  "key11": "26fMPcMj3g2Qo8yFbvVytnDeKfGz8Gdam4p1yzkWhZCCgpFKfAhoJqrVSBFaiRSUygBRA81d7H3UeHc49T3yynxx",
  "key12": "25m9oVPGWNcD74Q2NhoBLxKnhLTfqHnRARbh65GXsbdphxfYZTiPyMGSyScFh7uExNvwfKo2rHzJgGpWUP29eS9r",
  "key13": "4r7HDPs3vX1223izoLnAPCz3a3gH6xzJ3pLptxGL3gpbXcdD6Jonq3LmY5msuZvSgaQC3zrx91DNo6qY4n1ZWkid",
  "key14": "2ERdFqCTnkc8ysFr8aoEaGU9Y9pvR9fkouXqRmeaNPf3p8NGa28mUkx19ymMdFWeXSPFfYdigsHSszQMT6qzRdfN",
  "key15": "2DqsDjv3ep63nyGVduW2sR2puPQNXdjschf1YdzihrovBx7Kg7XeHyMP1JPiGSYXKiiw76A3j4NrMy3t7JPELFEu",
  "key16": "4LFcpds79M4gVVmWta15rSju3MSsS6cEvauEs5zfbQ6m7jUT8aFSVREZTim7eik9TWRgQjRgRy3xmhyqfuHXSuVe",
  "key17": "255yNgw8LXT4xeuQ2t6Yb7iKeZxdV4trRMBmU4dicQi7LVvLvDXQbdvAyoiUyPmrFVDW9D49tEC85NmSVf1T4a8P",
  "key18": "4Gb9R1EK58SYj27mbWEUdimvdobLbXAF243cFC4UhkNyVre6CVwNpecbSQXarGf8n5XPAT34WDMSt1NR2g3fUuBt",
  "key19": "QnonwAAwisnzdv9at8AF83cwKUWzC8wk7XTGFB3pCuPfBRwSXpn2L1WQCJRjzCoNzgy3SRsAc5evbfdQwR6dEJQ",
  "key20": "5btdEoh9V2wjNXL6GzxHLZwYqgFAWLbGhizjMpX1JjEdEgtr61gvuUhqF4GcjG1BdmGgKPz5966KHvmCEymG3Enp",
  "key21": "4AsV72LdRP7pRHYoTRACjk8mZtaf8kVddtuQpYvnmXkbzQVDdFy7he8UxTNnivGGYCy5DwKUAVcPauGQDg5C5zYg",
  "key22": "tT5zijHNeXjxzgtuF2y1t3N6iJMR8K2ceGKLYQA7yn43mQbMK4PCQ8ctshQxhs8dGvkzChCtY9LwASmWMYmgicZ",
  "key23": "KCujPLNpcLKBqEZh4H7eTztamMbEMizmpjR4PrELG9v6F1smMsaTPrHQ1VDv6T31rNNyThH3j2ZpRB3vXN1ejJX",
  "key24": "33uZXdpiVmaveffrLPWSjWcvVzAV1Dx4YyQWw6rzoNv3YYdzuP95oxPaBLXpF9wz3QNCSY6rA8AGvcNoPYnSp5SY",
  "key25": "rMkAeX15KcmJUpXZpxgaAiRV7Edpieims2SK5qa9tu9mmudXDbsECukNT5vMeZkwMQEDSe8kHKUnw84CwVaA4AW",
  "key26": "32Di59TmHs5T8nCxvT9PcGKbBLuGs8HXMj1E4DNVP6FegTDas4NEX3q2EXbpsQMAi74wFLNY7ZW2QxkXVS7DMwKY",
  "key27": "3M8UKd5iEsHxzmMzeK1SqQQxp6kBsE9mt6AX32ELgigERc7GwYKto4LrTEcGaQnBvy46qRwwakGgchSKbAXsMLZc",
  "key28": "2wwQGhUnV5G1jTBwuKBDBbuAKKK2gBjGRXMbhef5fkM3NDNkf375bXefiME4to5YiXfdyVNrfX76qpuxvqYpCAvv",
  "key29": "DU7SbFcnYFpCHN3VWv2aEU7w78ikWZiLvVrJwUTM8oXBrTb296U5YR1kpESi9mVmFtkH742s6AVkxsY3T4Y2kQe",
  "key30": "4ZieXMX2jMDjzzxqGGVXkhbb2Gp5d92BsY8BsTDsZ2RffXqFQcHRF5XDMSKQ8oQViFMn4LZDzGWN8nLu696Hgp4J",
  "key31": "2cztXhMNfZZoQqHZXBibxY687MGAuxUU2FH3CmLGyUTRUKkeQizNHSrLVtXYiFBubWvmFMFpjouAWw19vPquEoxC",
  "key32": "2gG6vhHrg2NVvnXPm3KXaPumdqBNXQ3UXsPpbKgAJC8RaR4kEBsudwjrtFYqjUAM2nUxqGnWrb4ATGd9enQRGEVW",
  "key33": "bn539bSaukS9caVJfdyjGPtnXFqEtzKUGJuDbUuop2wM1vt7a46yaVTMHfKbA8XMLdGGX4iNNG1n6Q8iZ4mK6Ta",
  "key34": "4jkdtc7oWx4oVgF3ewz1nGU1ekboCNZJyYmhQm11Mjq57XzBSW8mY5rPkEjheSXEs7NLWBZb6KnJjqpgMr2xZTi9"
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
