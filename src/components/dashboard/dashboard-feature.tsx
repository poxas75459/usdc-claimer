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
    "tRBw27KJbV6fD4oVJGVMb1EYzHVmzBpcdTjtJ9udxSVorWvg1QEiKh6dQoxSRqzx3YXaG3Wjr9c1HDezKipERK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qrbUDrsf1S2idRuLanobwCFWMPpR1qEfEn2W9cML8geieVrDvWKVm1ZeufxUxtSoPwHtWMfLthRGkoxYR1sdfBa",
  "key1": "4kZfACmAPdh6wvK3rgAxeUN42jxr4nd1jr852iQdTbg1pFFhASnNrPsnHevggpMhyLERw5hL5fGq4691TPABMWTD",
  "key2": "LBUTr7fD6GJNh5B4V8FgfNRoGaGQUvQnTkxbjQAYXecBCG26rwTQKJqaKJSoxySWaPmNc3ZaEmWpo3QTn29FbRt",
  "key3": "2A8GFVcG25MT3iWuf9kRYTfVcZX57zXK4jWtmjnazFy6gC6xTRv7VGuMFmS5HNfJKtAp5qeNAxRUoANy71Z9FFqp",
  "key4": "4tsMp4r1jdmz3un2f8yYhVqbg98LSEKeRS1nDgNa4VVctecvrNfZPQ6qqmgDFdvMyZmz84umiXaNLxHeJdXHPmrW",
  "key5": "4U5qVEapEr3omNpPFzrSV6B46teoNV7jJSP1Wr8xnFhuu9UCSHsG3zx7NxijBzpsNZrcqg89HdCfgquZZ2sdTxxN",
  "key6": "yUpEixqVPNNPgyX4iTPAux7k67twkYkZNSELMEjeKBMhdD7t8toFMS6Hkp56PZvGjdss7sdYuX5iR4MYRA8AbUp",
  "key7": "5d2g2DhM81Yo5xzhFXC7UQqrg2DUfxM7gNShvWprewxbsUo21A3JmyREpjuX8r89xY81A9LAhuK5BJJ4juHs6R6m",
  "key8": "56ViTPbUBKY2btZfDbPEg71sUKzu6qi1j2fV1pJRfyaeVEhT49owFLswaCzoYSpotrpXpE2hvynPL53DxU76Armw",
  "key9": "hr9xA3wD2MzumNsEDVetJok4YvKsgpGz7FMV3byiGXDuoaA9NFjo31LR1MfjPpphRoMxMthMQ93ow7FfD4H6JSY",
  "key10": "5abvDVbFXeCcLntcyyMqyFLg8DGDd5rcBXyqLqC3GAQ8LQrdb6bnJZirVJdNMnbLZXDYJPXhE5zPdFxsdiSr5wGN",
  "key11": "4vkzFonLk2VwSEnfq6ctiZXGKbDGH58yVEv5k3nXLHpcw6pqreCFvXJYCfz4Di5qTtkUyUFDcCFBYde1YRD4qBrM",
  "key12": "5k3Kk89ckWDJyQ25t41JFaomyH5v2CvvFRGD7WgcDaiWKj3wNjKARH4PsFfwvjG6QXb41o2aJQnGQsh3vBoKZqt7",
  "key13": "B5dbkZPqeUsyQgEzrVx59ed5j1ZfUGGG21BdAnZfsxCFWCEg9tZgqRrX6uwMmkSR9bhUGNgjEpeecNug4DBhgxT",
  "key14": "2nALPGqxxZNCtLpYVwBDf6Fojp5sRUUu6aHETxbog6ahvjFHHtUvMekTz774xNKkG2p5kf51BjHSxbTixoKfsW3d",
  "key15": "5cj89uBsTcZ7nRzb6hoBq7vwH8eeTXUGcws1DJRiqhK4fZcMrjQysLLEmg3xWqdPDFBiQGnE5Ts9apPtBdK2sxZf",
  "key16": "4xJLKE7xLKPaUDs1AH6k6ULk1X97G4qKt7WF3xU29tZrAdBZSVSxYXWK8LUcrPto7LbnzhnUSw7ZD4t3muAYmn6p",
  "key17": "qXuNptCpYF73cm57SYn3bSeWpN8nYuMMrSHzV9FwDAYrdmTan925NaNGebUYmN1fam5MA3rrCGb6xXGNywYHBZ2",
  "key18": "NnjYmjktLoGxCou6DMbwnf792GqA6z3cYKtCAEp1m4c7Cu2YzChGvaBxKzGgjE4voRNkAuHtf4P3nV1uGPytxuj",
  "key19": "2xGvRe5Yn39VCsjTNmisXbHenidEuoKSJztudMivmURvmRG7bnNgTAYwdewGRNRMrwYgBFyiF4BGqx5vzyVJGjzk",
  "key20": "tjoUkPzeoGVbynWYbryarCiqsbyn9rXWTUWsZqE9LgmSNLxF7h4WZYsKJ14YCxSkLtxK2pwY2ZQb2SdxXCZqAFK",
  "key21": "4mqF64SsmgAR5JYYPiKbeGh7eCPAJkvVnjWWtbVVqvcDbrrFMoEsueMpffNyBsuajDM2DbxU5ieMAPiZH44QmU1g",
  "key22": "26dFX4hstTTs5JrAsbaUYjh4pV47G5mxNcBU8aRJ4RwVZ1S9fbUSqmfnMLHAGow1k6BvnS8AgqkWi4fe9NEDByZ6",
  "key23": "3adYGsqtYGZCKhb5ZBHxBAAkR2hU9MoA2isUDy5fybw3KbmLpmHchNSKKJ68misaudjUmhgwnsVUMw2asqDgDvAT",
  "key24": "4KghULHQ1g3Y2GG2yFLqk3woCuoLNrYxXEoyof1vqMw57C1zxMn2J88Vfn7pkXYH3WyW5F8G3HzqhnMFdCyBCFtz",
  "key25": "187nFAFFSYbNktcmcYqVLJUKk1VxHy5aBZ3RrBXbJGzchGACexTHxijKXUMTtvfh49KekyQRvQMZ87aDiucxBt5",
  "key26": "33FuKxKEmmhEcNLMVhDLydyXqRbxxetCebeofJDufxPpXTAK1Yuu4NjaW4ViubgquqnyDEF7kkCYoGMKThQkvBZR",
  "key27": "3dpF7iApaQkzxsZazeXWeybpC4HSCvDw9mitNRyAzpguNnZ7YRy9g6pCVmap479R2uXeLr9E76fYCoXfQBTryBFP",
  "key28": "4zKQERkFUMFzKtTChHvUn1aQC2Aho76zggUG5WcfHzqHjHXfbEiXW7UMQoGvKFtec6SgktXFLKynwKw5yFtUcuV8",
  "key29": "5bjgsxWU67wVk3jTi94T4czGJTofUNLv31aWjfAHDEZcvv8USfS6daJZqo7Vs5tEUQRLV11PT9wW5qSKVvtReBBS",
  "key30": "3QoqCm9Bcy3jK1WshrD5Wno2rEqrhvvo3fdepF8Pn6CwmVv211gXy912V1VJK8HxxNKLqKPqVd1Ukp2pnTgtM7TV",
  "key31": "3i4WmBAEAT6SfXM2wkoaw8WsRCb6qhdi59xGj3GFwkDZodBQb5uYUWp4kPnfj8AxARnfPmz6dgpYKu5DNF4wSg7Z",
  "key32": "5UDxmT9JwFoDpLpZJZrmwuDjFdA3ed1mQyAy6xjPUCdvNg3ZWPxmAdRY255et7kRwgj9HuiccCEuLSCgFziCGvAS",
  "key33": "4eybLsb6vaiiykMuH66NmKM58sjaDE4uCdNMcgcuL1eh9UeXeiB1zoefo7RhVfX18RdZ4fgPnDi4ywmFomdx3Say",
  "key34": "2BtAxGs3iwB12FBkEoCy3zsd7VV1TpVjbAxdSXT6UAGRw1sinC2pSTW3iKn2NWdypHDUbybxmRQUkSfJw9fUNA85",
  "key35": "PFVDiD7Jprgsx3mzkBrjqdpyBC3BgQmFLw2SHCYe57g7eiUL5HGsexFnSw6jv1V9gcpouuDKRntDtKGqPaByxai",
  "key36": "2ndVg2sN5D31RzCp5VuzH55vr76oigGkRckGKx84Lh5bVAPbreEM3zXtTPvWojb2vPtS9BzcAAcHJyiMyfEMC4oZ",
  "key37": "54LnYS4scsVXtXrRyke8FkAjYSmoMrGJV1ZKRzUCokqVwvcY4V7rKNzTwi2BrbsSWP6VfTQZKYyhc57XJtW54x1h",
  "key38": "48srHGXNddy8BSuL63bA9LfmbwEJziZDaDDaCVcdGrsBn94TDTAZZvWuZVjz78uink89Ng2nm3hE51vuSPXWrdry",
  "key39": "2cJHGufgAu4FqgaG9wwBR11dF6vGdRcnWhC3BeUGBm5Ah3PdwUFkZWSPJBdz5EeQH3jNxzinWn4d2DwsFzJX7aPf",
  "key40": "5y1XND7VdUQzgwZs2gWMFXubgtmpZ84HLWaJvVcryyMYtyz8tkCwnxbhuFmAZzTLQNVw6Lbqtu87B5DgD1EJCdNb",
  "key41": "3S58t39f3m8Dit9o3fS8e818yzWYQeaQKPv6ZQpSpmVP1PSX8WMptX3zke17cjTNvvJ8furHPkwkf6rnanbfmHP6",
  "key42": "udZaxbUzXZWwNZgCKqTZFdzwM8Bjk9hVg9F8XZ3GRLcwo3d5qcjVUCguniX7byWf171cgviMUNCyUcZXvnRRc9n"
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
