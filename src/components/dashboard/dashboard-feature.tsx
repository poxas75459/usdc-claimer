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
    "4d3GjFgSi8Q7gHjdgFmR6ATuXsj8vQAfs2wRFGjfA8QQJmgZCgu7hPmsP8X5nwhswn6QPcsKqg4mvjBRBtjXzcW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hLrzz1CUF8DshS3PThGsm3YvxBMC9h94JjDx4sdLw3W3xN73VFpb2G98V5o1UAfcApVBE63YnjkFejqDPHuP39",
  "key1": "27ESYYPVhR4xC4ed4ojAq3ZonBGBSdVfPscDjQ4JzzwNLbuog1aJmseCQecZ7aBFiH9fmTArifRqv4UcM42YyBGs",
  "key2": "2yg5DVZrKVJDSCRatQDjUS18V2AAEoSjevGDUimSfgpy3wPL9tk5uwUHKLXjnS8MALd33A8zBA4PVV15EnXvAtCB",
  "key3": "5BRNfwY3HTec3xg7U7JChYJFvXvAonfS6eVju38jPkqSxX8RrLSFBj78x2GQd7CTycPPYyFEqRPA9Vk4sqJJVCQd",
  "key4": "5Y2gdwbwXieRFM7B5Rev8WTXDrt7rMSjwKWoVhDmLHFZeWxV3QUb12gQZ6uekXSAFETjT8PnDsyB8RY6DpLHFx2L",
  "key5": "4pCDf3NbswgQJWHiTJBuhuDx5jPsi639uLA4S1FjGGtsZanzmckCgJsZ41yQJ6AK82wzGbRULoBGvBuKHe3HBiry",
  "key6": "62aojUPLwdFAaksAq31qZ1hrRyDg2NFgQR9hMhmPTtmbdH3dNvpyerkCmFpWhVXxydqx3YzEt6TfFFRsYFd2HGMC",
  "key7": "2v9xMwcQfno9UvbURKhT9Zk8y6vaxzMsqm6pHoftz15Y1cvN1EqxaBN9ooycCh14VX4DyxHYTAh38t4eykygKL5S",
  "key8": "5RmkYqUAD3khRVcxQkon4XBxMoi9uhYYYWmtkCiruGypg7r5zwHg2uJpmSFcsbucwxhqXYVCsYU3pR8MD9sgMiJH",
  "key9": "5gN6DEQqqkCwGhpg5GCNRbiSGyN9sDV7zNJDgEhdcKzECE3xx92A5P4h92BurYUmdzriVgnBhLYmnSt5a2CVefLV",
  "key10": "oGrGsweeSHUbC5D73AgfYrJzBsidHdpvxUjxP2GMSWJtDNxTR49GinFuggxfnEfdwpTwhC3MdPZUrv5TqJfkdY9",
  "key11": "2C48LWRRp4zobcqbSgTaCAt6F6vwA7rgcgt35PEB9nLEx5FeqnKhiL6cLzdHvNAsaG4QB8UZNsyXRxEsMqANVdRF",
  "key12": "3E9KdMcAFNNEZjREizQFArG7TF8WjzRfQXXGjZbLmagM1LmaTfHPdZUodzL5ZME4yL3sycYWJprh1giZ2LY3NYpR",
  "key13": "5znmZ8WFjRCBWaUpd5qDDr9CGBAK3H7DdBQp49Lyv8dX16UW9yuJxgyQ1LkvpN9DpvfMURTrsfEzb86fq8WcnSaV",
  "key14": "22ncHcKThFToCg2tKLvL4owJU1qZk6mZ59qW3S8BSFR3EQ1dx8WPYWsAuWmqfpk5ZVxqPMW4j3VrPUuF1gct88EB",
  "key15": "3YKruKnsu28uaP1mRKPTHbFpqQGWM634CLJ7qxFW8qw9Mqorv6anBxvFdtCkcBB6duw5eQudatYtSF3JeEao9m4f",
  "key16": "5mV4dWLqeRYz5C5bQURHFoosdfGWkGNN9zXexqXYWZTbZ4NAKQyyg3K54hAR43pjzjKxypQTwUk7T3dq5Vvk8LDH",
  "key17": "5sbRz1FPLnDEPpg4YiMRB2imudN2Y5v6kpsm4h9fYZeQh3uLfzhry7TEuFeQ5MSdaekomJDbYg9q6eSy2ReuYnSK",
  "key18": "3sbEWaaUMTyBEn4Dyb58A6KLkMSLGpU3LQ373AQySTVn8n8WgU4GqWLWWGxjbqYB5YFPWugtJRCFUDppXJDMa3Fd",
  "key19": "31BBFvESq43pyq6P8745qcRzTU5UWTJ2znXBPPGGMEwtCmzM1c8NK9K78XwM2dCTqeiWSxT5JuiQGRL4CtBHWK8M",
  "key20": "5sMmGbfMushiDH9g6xyD48JPaBi3AWVJ7TdPbERTVD4E7Hbux9dhaqzwaSFB8bjiFysW8iDUosdGFDhpF35mM5Uz",
  "key21": "3a2tPeGRakLPhQabufUujgzdCZ8M9g44DjgtGBM58tUz9xTUjyXs9aB3dUzH795qZCi9Chw2wWKJVSCHqUC9MrM7",
  "key22": "4AGTE8nytas6iGEhh1p2uS9auaPhdfYxAxHDzkAR6SmufQNdpAdnRJi86fJGXttJ9VrCvTfEVdgXvez1q42c6zEA",
  "key23": "4Bx3nLws9hdPXbZZtGpG47gHpbqfs1PeK5znfbxa3EvomeKT8t26JJbtFsP3Qk9H3BHPom6Z2dVCf1tUK9c4nv74",
  "key24": "5V65cQv52y1mNAv6sTofA2Bqfibp4D8q9Q6GDUZ3KENcXgkrnUxXq4A3nQTn2ig76VZmGJeK4seQuQxhrnsJQfmS",
  "key25": "2C9XhrPoV5CGUdjsqzWPRdqFfc3F47WDkT9uJJ92dZzvYpXMTADWGLA4bZ5Dv4VrmPxxFehQyoiw4Qec5gdmqXuy",
  "key26": "2LqA3aR47e1QQtesSiBcrtnNDphRyVFX5zrv5D2DMX3fpkLa5XUTu2EG5YJRDCfj6pHhSECDCSzRNGocwhVA1cMQ",
  "key27": "3QeaGeUBdCHk1Dh4p9amdNVjUmPUweXDr86eDmgf3mqv5quuV89ugJnTSw8fivBnv4CjhteyUR639LSZcygyEd1y",
  "key28": "3FFBdzjuGGTJhXx1KK3nyGNTpo5aG2VnZLhsiATccaAq6TucHByDgghWKCB3kvARs6xx6xpQgwrJogur1pA6k8Qf",
  "key29": "4XCqU4Q61prvpKPgr3ce4sPLF7r6fNGFUpoyX47iqKPKqYsZKAMUbuvQqYseYBXj34P2APaCiVcchQ2yAQZxxnDY",
  "key30": "ng7gQ5EZKyxqLmyC2AXJzNjeEgZsFavSAr7eucYcBZ7gYsKZhB9kh3NgnRgxCSeNjwziVYfBmC2FHnn36vzecye",
  "key31": "3unx4Xn3JRiAHEgSDfhk8U2X7eRGsGPniLRwEMCsxTQxfBvZ5cMRhpTcr7jk6ygRsuLpwg9fVx6cVaYX7538yzoW",
  "key32": "4dXdMeKyeeEVmNxLkzWnpHSGipJKdXoXYBiVELgoDJ4gyVRU8d1Q6dCsysxwpbSAAptopmd1R7emk2jttyDkPRsb",
  "key33": "3p9Z1AhX6Jv2X5nGTxJ49gFBjE8ypEaExiR7NRTH9H9fs6aEJunHonC6Q84nQwMqU5wkS7dt3Q2iS4Zf8YFM7cUd",
  "key34": "3BDGLbM8cyyAGynuPYZTzkKzE7GZ32jn9YDw3NgHkLXeyBG31eCU2cNQTBmRjqyJDvbKAao1vAnd8ASMRHFj779d",
  "key35": "3JKLsqxu4mbk5JAJjj9th6bx9gcxATZ8wfzArMi43mn76kvtcg8dBaPxHcV15GBLsxvKasYHCH5yd5vHwRSJQk6t",
  "key36": "4HMGWCFcaqeLhesUAxeBzLYhhU6itMWAVwG9F7VbcYNC8Jd7CekZVkCVH43MYQWFgYUZh3AgKBo8GsyqaXeysYNb",
  "key37": "2wJeKG2oDc5xXPTVrbHFfiTGzXC3XmSA5k8tgGZ9qeHoj73pTH8tscJgT4zGquzxBasv2kEG4GhewYWjqkfMQZMa",
  "key38": "33sgsCeaF5j48kxDxcvGGRUod784m2w3f5f3Zq4QCrVc6mLUorJZukbiBmTiFYTXizfpnYk2eV1UWe18iCR2UEPg",
  "key39": "3pNKt6vihZirBBmriKUDq1XymKHdg1MU2tqqZckWAK5D6CcsJhzz3v4KpfZdB6inAXuQo21VK4JuB3K7WmmkxETt",
  "key40": "5vt8z8HtDSDb6nJhrHH7btqqvTCJK3RsiUnZUNqndPXZ2Hc1RrkJDGherPixRNDK46Z35G4qRoZdWghejVb5bLW8",
  "key41": "9qLWvphdeG6BgRLANnpGqbREudXg6ALTCcxseHKyWRDdANN5Pm1yMMxHZ4B5QiKLm7qZzqWtDA55ows36mRRnX6",
  "key42": "BcJBK9PuDMMS2SCDRZxrxDWULEpfyrCaBULNgJgTfXan4UnkrWNHWDjcRd5vRmUePC4aBEhft3CVVLHWMKivSio",
  "key43": "3H6GoX71vYmtpKPNwhQFZ98tbwSYbq5Mx4dkY4sCNQpMirxs7vNe3sEruaiiAfGDgR54BRqzuZQw2CcnQVEaYwXA",
  "key44": "JvYzuEHJGRfnAoCULpJv4gQHHVFoQVtZ5DnoMUY3DwTHreEeq3E9thVCBA8arNwEoy11jeebLeWMNXPT6mEfVSx",
  "key45": "4fxVY1rQ8VvFYfADUBZ11Abqr4EtBwSEkcfFPDuJi353jSLU8n7s8TYBqyVU59D56rWsRgEsz6VQhNLztcY3KcxB",
  "key46": "53vC7xo6A5grBBi9ZEKaDseGBJ2FFdqASo1CNr2TjRNuSQ3bNcJF8rULbmzcVY2nGKPkyxdXy4nUbtwrLGzvuEux",
  "key47": "2i2ZoTGVASfjcHLPj9uNu5oguJnrhxPcyVHE7KiV5MQ7bRp45C8uUe7GCLPHw2XpzTC45cyTW5aaP1EBkxhpGrYr"
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
